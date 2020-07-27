const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for store
 */
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "store";')
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error GET /store failed,', error);
            res.sendStatus(500)
        })
});

router.get('/:id', (req, res) => {
    console.log('req.body', req.params.id);
    pool.query('SELECT * FROM "store" WHERE "id" = $1', [req.params.id])
        .then(result => {
            console.log('result.rows', result.rows);
            res.send(result.rows[0])
        }).catch(error => {
            console.log('Error GET /store failed,', error);
            res.sendStatus(500)
        })
})

/**
 * POST route for store
 */
router.post('/', (req, res) => {

});

module.exports = router;