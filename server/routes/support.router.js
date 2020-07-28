const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route for support
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    let sqlText = `SELECT * FROM "user"
    JOIN support ON "user".id = support.store_id;`;
    pool.query(sqlText)
    .then (result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('ERROR with GET from support.router', error);
        res.sendStatus(500);
    })
});

/**
 * POST route for support
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req.body', req.body);
    let sqlText = 'INSERT INTO support (id, store_id, request_type, request_body, ticket_status) VALUES ($1, $2, $3, $4, $5);';
    pool.query(sqlText, [req.body.requestType, req.body.requestBody, req.body.requestStatus])
    .then(result => {
        res.sendStatus(200)
    })
});

module.exports = router;