const db = require('../db/pool');

function getDateRange(query = {}) {
    const endDate = query.end ? new Date(query.end) : new Date();
    const startDate = query.start ? new Date(query.start) : new Date(endDate.getTime() - 29 * 86400000);

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
        throw new Error('Invalid date range');
    }

    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59, 999);
    return { start, end };
}

/** @param {import('fastify').FastifyInstance} fastify */
async function statsRoutes(fastify) {
    fastify.get('/', async (request, reply) => {
        try {
            const { start, end } = getDateRange(request.query);

            const [
                overview,
                circulation,
                topBooks,
                loanTimeline,
                employeeAccess,
                employeeWork,
                penaltySummary,
                topPenaltyReaders,
                penaltiesByCategory,
                penaltiesTimeline
            ] = await Promise.all([
                db.query(`
                    SELECT
                        (SELECT COUNT(*)::int FROM "NOTICE" WHERE "CREATE_DATE" BETWEEN $1 AND $2) AS books_added,
                        (SELECT COUNT(*)::int FROM "LECTEUR" WHERE "CREATE_DATE" BETWEEN $1 AND $2) AS readers_added,
                        (SELECT COUNT(*)::int FROM "ORDERS" WHERE order_date BETWEEN $1 AND $2) AS orders_placed,
                        (SELECT COUNT(*)::int FROM "ORDERS" WHERE status = 'APPROVED' AND order_date BETWEEN $1 AND $2) AS approved_loans,
                        (SELECT COUNT(*)::int FROM "ORDERS" WHERE status = 'RETURNED' AND return_date BETWEEN $1 AND $2) AS returned_loans,
                        (SELECT COUNT(*)::int FROM "ORDERS" WHERE penalty_amount > 0 AND COALESCE(penalty_applied_at, return_date) BETWEEN $1 AND $2) AS penalized_returns,
                        (SELECT COALESCE(SUM(penalty_amount), 0)::int FROM "ORDERS" WHERE penalty_amount > 0 AND COALESCE(penalty_applied_at, return_date) BETWEEN $1 AND $2) AS penalties_amount,
                        (SELECT COUNT(*)::int FROM "UTILISATEUR") AS employees_count
                `, [start, end]),
                db.query(`
                    SELECT
                        COUNT(*) FILTER (WHERE order_date BETWEEN $1 AND $2)::int AS orders_placed,
                        COUNT(*) FILTER (WHERE status = 'PENDING' AND order_date BETWEEN $1 AND $2)::int AS pending_orders,
                        COUNT(*) FILTER (WHERE status = 'APPROVED' AND order_date BETWEEN $1 AND $2)::int AS approved_orders,
                        COUNT(*) FILTER (WHERE status = 'REJECTED' AND order_date BETWEEN $1 AND $2)::int AS rejected_orders,
                        COUNT(*) FILTER (WHERE status = 'RETURNED' AND return_date BETWEEN $1 AND $2)::int AS returned_orders,
                        COUNT(*) FILTER (WHERE due_date IS NOT NULL AND status = 'APPROVED' AND due_date < NOW())::int AS currently_overdue
                    FROM "ORDERS"
                `, [start, end]),
                db.query(`
                    SELECT
                        o."DOC_ID",
                        n."DOC_TITRE_PROPRE",
                        COUNT(*)::int AS total_loans
                    FROM "ORDERS" o
                    LEFT JOIN "NOTICE" n ON o."DOC_ID" = n."DOC_ID"
                    WHERE o.status IN ('APPROVED', 'RETURNED')
                      AND o.order_date BETWEEN $1 AND $2
                    GROUP BY o."DOC_ID", n."DOC_TITRE_PROPRE"
                    ORDER BY total_loans DESC, o."DOC_ID" DESC
                    LIMIT 10
                `, [start, end]),
                db.query(`
                    SELECT
                        TO_CHAR(day_ref, 'YYYY-MM-DD') AS day,
                        COUNT(*) FILTER (WHERE DATE(o.order_date) = day_ref)::int AS orders,
                        COUNT(*) FILTER (WHERE DATE(o.return_date) = day_ref)::int AS returns
                    FROM generate_series($1::date, $2::date, interval '1 day') AS day_ref
                    LEFT JOIN "ORDERS" o
                        ON DATE(o.order_date) = day_ref
                        OR DATE(o.return_date) = day_ref
                    GROUP BY day_ref
                    ORDER BY day_ref
                `, [start, end]),
                db.query(`
                    SELECT
                        "UTL_ID" AS id,
                        "UTL_LOGIN" AS login,
                        TRIM(COALESCE("UTL_PRENOM", '') || ' ' || COALESCE("UTL_NOM", '')) AS full_name,
                        "UTL_ROLE" AS role,
                        ("UTL_ACQ_ACCES" + "UTL_ACQ_ADMIN" + "UTL_ACQ_TRANSACT" + "UTL_ACQ_BUDGET" + "UTL_ACQ_EDITION") AS acquisition_permissions,
                        ("UTL_CAT_ACCES" + "UTL_CAT_ADMIN" + "UTL_CAT_NOTICE" + "UTL_CAT_IMPORT" + "UTL_CAT_AUTORITE" + "UTL_CAT_EDITION") AS catalog_permissions,
                        ("UTL_CIRCUL_ACCES" + "UTL_CIRCUL_ADMIN" + "UTL_CIRCUL_LECTEUR" + "UTL_CIRCUL_TRANSACT" + "UTL_CIRCUL_PEB" + "UTL_CIRCUL_EDITION") AS circulation_permissions,
                        (
                            "UTL_ACQ_ACCES" + "UTL_ACQ_ADMIN" + "UTL_ACQ_TRANSACT" + "UTL_ACQ_BUDGET" + "UTL_ACQ_EDITION" +
                            "UTL_CAT_ACCES" + "UTL_CAT_ADMIN" + "UTL_CAT_NOTICE" + "UTL_CAT_IMPORT" + "UTL_CAT_AUTORITE" + "UTL_CAT_EDITION" +
                            "UTL_CIRCUL_ACCES" + "UTL_CIRCUL_ADMIN" + "UTL_CIRCUL_LECTEUR" + "UTL_CIRCUL_TRANSACT" + "UTL_CIRCUL_PEB" + "UTL_CIRCUL_EDITION"
                        ) AS total_permissions
                    FROM "UTILISATEUR"
                    ORDER BY total_permissions DESC, "UTL_ID" ASC
                `),
                db.query(`
                    WITH actions AS (
                        SELECT "CREATE_USER" AS employee, 'books_created' AS action_type, COUNT(*)::int AS total
                        FROM "NOTICE"
                        WHERE "CREATE_DATE" BETWEEN $1 AND $2 AND "CREATE_USER" IS NOT NULL
                        GROUP BY "CREATE_USER"
                        UNION ALL
                        SELECT "UPDATE_USER" AS employee, 'books_updated' AS action_type, COUNT(*)::int AS total
                        FROM "NOTICE"
                        WHERE "UPDATE_DATE" BETWEEN $1 AND $2 AND "UPDATE_USER" IS NOT NULL
                        GROUP BY "UPDATE_USER"
                        UNION ALL
                        SELECT "CREATE_USER" AS employee, 'readers_created' AS action_type, COUNT(*)::int AS total
                        FROM "LECTEUR"
                        WHERE "CREATE_DATE" BETWEEN $1 AND $2 AND "CREATE_USER" IS NOT NULL
                        GROUP BY "CREATE_USER"
                        UNION ALL
                        SELECT "UPDATE_USER" AS employee, 'readers_updated' AS action_type, COUNT(*)::int AS total
                        FROM "LECTEUR"
                        WHERE "UPDATE_DATE" BETWEEN $1 AND $2 AND "UPDATE_USER" IS NOT NULL
                        GROUP BY "UPDATE_USER"
                    )
                    SELECT
                        employee,
                        SUM(CASE WHEN action_type = 'books_created' THEN total ELSE 0 END)::int AS books_created,
                        SUM(CASE WHEN action_type = 'books_updated' THEN total ELSE 0 END)::int AS books_updated,
                        SUM(CASE WHEN action_type = 'readers_created' THEN total ELSE 0 END)::int AS readers_created,
                        SUM(CASE WHEN action_type = 'readers_updated' THEN total ELSE 0 END)::int AS readers_updated,
                        SUM(total)::int AS total_actions
                    FROM actions
                    GROUP BY employee
                    ORDER BY total_actions DESC, employee ASC
                `, [start, end]),
                db.query(`
                    SELECT
                        COUNT(*) FILTER (WHERE penalty_amount > 0 AND COALESCE(penalty_applied_at, return_date) BETWEEN $1 AND $2)::int AS penalty_cases,
                        COALESCE(SUM(penalty_amount) FILTER (WHERE penalty_amount > 0 AND COALESCE(penalty_applied_at, return_date) BETWEEN $1 AND $2), 0)::int AS total_penalty_amount,
                        COALESCE(ROUND(AVG(late_days) FILTER (WHERE penalty_amount > 0 AND COALESCE(penalty_applied_at, return_date) BETWEEN $1 AND $2), 2), 0) AS avg_late_days,
                        (SELECT COUNT(*)::int FROM "LECTEUR" WHERE "LEC_FIN_PENALITE" IS NOT NULL AND "LEC_FIN_PENALITE" > NOW()) AS active_reader_penalties
                    FROM "ORDERS"
                `, [start, end]),
                db.query(`
                    SELECT
                        o."LEC_ID",
                        l."LEC_NOM",
                        l."LEC_PRENOM",
                        COUNT(*)::int AS penalty_cases,
                        COALESCE(SUM(o.penalty_amount), 0)::int AS total_penalty_amount,
                        COALESCE(MAX(o.late_days), 0)::int AS max_late_days
                    FROM "ORDERS" o
                    LEFT JOIN "LECTEUR" l ON o."LEC_ID" = l."LEC_ID"
                    WHERE o.penalty_amount > 0
                      AND COALESCE(o.penalty_applied_at, o.return_date) BETWEEN $1 AND $2
                    GROUP BY o."LEC_ID", l."LEC_NOM", l."LEC_PRENOM"
                    ORDER BY total_penalty_amount DESC, penalty_cases DESC
                    LIMIT 10
                `, [start, end]),
                db.query(`
                    SELECT
                        c."CAT_LIBELLE" AS category,
                        COUNT(*) FILTER (WHERE o.penalty_amount > 0 AND COALESCE(o.penalty_applied_at, o.return_date) BETWEEN $1 AND $2)::int AS penalty_cases,
                        COALESCE(SUM(o.penalty_amount) FILTER (WHERE o.penalty_amount > 0 AND COALESCE(o.penalty_applied_at, o.return_date) BETWEEN $1 AND $2), 0)::int AS total_penalty_amount
                    FROM "CATEGORIE" c
                    LEFT JOIN "LECTEUR" l ON l."CAT_ID" = c."CAT_ID"
                    LEFT JOIN "ORDERS" o ON o."LEC_ID" = l."LEC_ID"
                    GROUP BY c."CAT_LIBELLE", c."CAT_ID"
                    ORDER BY total_penalty_amount DESC, c."CAT_ID" ASC
                `, [start, end]),
                db.query(`
                    SELECT
                        TO_CHAR(day_ref, 'YYYY-MM-DD') AS day,
                        COUNT(o.*)::int AS penalty_cases,
                        COALESCE(SUM(o.penalty_amount), 0)::int AS total_penalty_amount
                    FROM generate_series($1::date, $2::date, interval '1 day') AS day_ref
                    LEFT JOIN "ORDERS" o
                        ON DATE(COALESCE(o.penalty_applied_at, o.return_date)) = day_ref
                       AND o.penalty_amount > 0
                    GROUP BY day_ref
                    ORDER BY day_ref
                `, [start, end])
            ]);

            return {
                range: { start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10) },
                overview: overview.rows[0],
                circulation: {
                    summary: circulation.rows[0],
                    topBooks: topBooks.rows,
                    timeline: loanTimeline.rows
                },
                employeeAccess: {
                    summary: {
                        totalEmployees: employeeAccess.rows.length,
                        totalPermissions: employeeAccess.rows.reduce((sum, row) => sum + Number(row.total_permissions || 0), 0),
                        employeesWithCatalogAccess: employeeAccess.rows.filter(row => Number(row.catalog_permissions) > 0).length,
                        employeesWithCirculationAccess: employeeAccess.rows.filter(row => Number(row.circulation_permissions) > 0).length,
                        employeesWithAcquisitionAccess: employeeAccess.rows.filter(row => Number(row.acquisition_permissions) > 0).length
                    },
                    employees: employeeAccess.rows
                },
                employeeWork: {
                    employees: employeeWork.rows
                },
                penalties: {
                    summary: penaltySummary.rows[0],
                    topReaders: topPenaltyReaders.rows,
                    byCategory: penaltiesByCategory.rows,
                    timeline: penaltiesTimeline.rows
                }
            };
        } catch (err) {
            reply.status(500).send({ error: 'Failed to fetch stats: ' + err.message });
        }
    });
}

module.exports = statsRoutes;
