const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM shoppingList ORDER BY "name", "quantity";`;
    pool.query(sqlText)
    .then((result) => {
        console.log(`GET request made from database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

module.exports = router;