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
    const store_id = req.body.store_id;
    const address = req.body.address;
    const timezone = req.body.timezone;
    const phone_number = req.body.phone_number;
    const location_email = req.body.location_email;
    const point_of_contact = req.body.point_of_contact;
    let queryText = `INSERT INTO location (store_id, address, timezone, phone_number, location_email, point_of_contact) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`

    pool.query(queryText, [store_id, address, timezone, phone_number, location_email, point_of_contact])
        .then((result) =>{
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        });
});

module.exports = router;