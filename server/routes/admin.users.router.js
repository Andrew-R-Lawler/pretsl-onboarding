const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Gets users for Admin Individual Store, so you can assign user to the store.

router.get('/', (req, res) => {
    pool.query(`SELECT id, username FROM "user" WHERE "administrator" = 'FALSE';`)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error Admin User GET,', error);
        res.sendStatus(500);
    })
})

module.exports = router;