const fastify = require('fastify')({ logger: true });
const path = require('path');
const fs = require('fs');

// Configuration
const PORT = process.env.PORT || 3002;

const EventEmitter = require('events');
const orderEvents = new EventEmitter();
const db = require('./db/pool');

// Listen for DB notifications (PostgreSQL NOTIFY)
async function setupDbListeners() {
    const client = await db.connect();
    await client.query('LISTEN new_order');
    client.on('notification', async (msg) => {
        if (msg.channel === 'new_order') {
            try {
                const payload = JSON.parse(msg.payload);

                // Enrich the order with reader and book details if it's a new order
                const result = await db.query(`
                    SELECT o.*, l."LEC_NOM", l."LEC_PRENOM", l."LEC_PHOTO", n."DOC_TITRE_PROPRE"
                    FROM "ORDERS" o
                    LEFT JOIN "LECTEUR" l ON o."LEC_ID" = l."LEC_ID"
                    LEFT JOIN "NOTICE" n ON o."DOC_ID" = n."DOC_ID"
                    WHERE o.id = $1
                `, [payload.id]);

                if (result.rows.length > 0) {
                    orderEvents.emit('order_change', { type: 'new', data: result.rows[0] });
                } else {
                    orderEvents.emit('order_change', { type: 'new', data: payload });
                }
            } catch (e) {
                console.error('Error in DB notification listener:', e);
            }
        }
    });
    console.log('PostgreSQL LISTEN setup complete');
}
setupDbListeners().catch(err => console.error('Failed to setup DB listeners:', err));

// Plugins
fastify.register(require('@fastify/cors'));
fastify.register(require('@fastify/multipart'), {
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '../public'),
    prefix: '/public/',
    decorateReply: false
});

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '../../Library_Project/images'),
    prefix: '/images/',
    decorateReply: false,
    allowedPath: () => true
});

// Serve uploaded ID cards
fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, '../uploads'),
    prefix: '/uploads/',
    decorateReply: false
});

// SSE Endpoint for real-time updates
fastify.get('/api/admin/orders/events', (request, reply) => {
    reply.raw.setHeader('Content-Type', 'text/event-stream');
    reply.raw.setHeader('Cache-Control', 'no-cache');
    reply.raw.setHeader('Connection', 'keep-alive');

    const onOrderChange = (data) => reply.raw.write(`event: order_change\ndata: ${JSON.stringify(data)}\n\n`);
    const onAccessChange = (data) => reply.raw.write(`event: access_change\ndata: ${JSON.stringify(data)}\n\n`);

    orderEvents.on('order_change', onOrderChange);
    orderEvents.on('access_change', onAccessChange);

    request.raw.on('close', () => {
        orderEvents.off('order_change', onOrderChange);
        orderEvents.off('access_change', onAccessChange);
    });
});

// Internal helper for other routes in this process to emit events
fastify.decorate('orderEvents', orderEvents);

// Routes registration
fastify.register(require('./routes/books'), { prefix: '/api/admin/books' });
fastify.register(require('./routes/registrations'), { prefix: '/api/admin/registrations' });
fastify.register(require('./routes/orders'), { prefix: '/api/admin/orders', orderEvents });
fastify.register(require('./routes/lecteurs'), { prefix: '/api/admin/lecteurs' });
fastify.register(require('./routes/utilisateurs'), { prefix: '/api/admin/utilisateurs' });
fastify.register(require('./routes/stats'), { prefix: '/api/admin/stats' });
fastify.register(require('./routes/access'), { prefix: '/api/admin/access' });

// Page routes - serve HTML files
const publicDir = path.join(__dirname, '../public');

fastify.get('/', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'index.html')));
});

fastify.get('/index.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'index.html')));
});

fastify.get('/books.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'books.html')));
});

fastify.get('/lecteurs.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'lecteurs.html')));
});

fastify.get('/orders.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'orders.html')));
});

fastify.get('/returns.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'returns.html')));
});

fastify.get('/registrations.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'registrations.html')));
});

fastify.get('/utilisateurs.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'utilisateurs.html')));
});

fastify.get('/dashboard2.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'dashboard2.html')));
});

fastify.get('/stats.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'stats.html')));
});

fastify.get('/reader_profile.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'reader_profile.html')));
});

fastify.get('/access_control.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'access_control.html')));
});

fastify.get('/access_history.html', async (request, reply) => {
    return reply.type('text/html').send(fs.readFileSync(path.join(publicDir, 'access_history.html')));
});

// Midnight Reset Task
function setupMidnightReset() {
    const now = new Date();
    const night = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 10); // 00:00:10
    const msToMidnight = night.getTime() - now.getTime();

    setTimeout(async () => {
        console.log('Running Midnight Access Reset...');
        try {
            await db.query(`
                UPDATE "LECTEUR" 
                SET "LEC_ACCESS_STATE" = 'OUT' 
                WHERE "LEC_ID" NOT IN (SELECT "LEC_ID" FROM "ACCESS_RESET_EXCLUSIONS")
            `);
            console.log('Midnight Reset Complete');
        } catch (e) {
            console.error('Midnight Reset Failed:', e);
        }
        setupMidnightReset(); // Schedule next day
    }, msToMidnight);
}
setupMidnightReset();


// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' });
        console.log(`Admin Server listening on http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
