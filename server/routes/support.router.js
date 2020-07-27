const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route for support
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    let sqlText = `SELECT * FROM support`;
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

});

module.exports = router;