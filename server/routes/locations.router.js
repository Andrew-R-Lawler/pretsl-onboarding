const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for locations
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "store"
    FULL OUTER JOIN "location" ON "store"."id" = "location"."store_id"
    WHERE "user_id" = $1;`
    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows)
        }).catch(error => {
            console.log('Error GET /location', error);
            res.sendStatus(500);
        })
});

/**
 * POST route for locations
 */
router.post('/', (req, res) => {

});

module.exports = router;