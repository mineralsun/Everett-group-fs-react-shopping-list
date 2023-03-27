const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM shoppingList ORDER BY "name", "quantity";`;
    pool.query(sqlText)
    .then((result) => {
        // console.log(`GET request made from database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO shoppingList ("name", "quantity")
                     VALUES ($1, $2)`;
    pool.query(sqlText, [item.name, item.quantity])
    .then((result) => {
        console.log(`Added item to the list!`, item);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error in making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {
    console.log(`In PUT request /list`);
    let itemId = req.params.id;
    let itemToEdit = req.body;
    console.log(itemToEdit);
    console.log(itemId);
    let sqlText = `UPDATE shoppingList SET "quantity" = $1 WHERE "id" = $2;`;
    pool.query(sqlText, [itemToEdit.quantity, itemId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    console.log(`In PUT request /list`);
    let itemId = req.params.id;
    let sqlText = `DELETE FROM shoppingList WHERE "id" = $1;`;
    pool.query(sqlText, [itemId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    });
});

router.delete('/deleteList', (req, res) => {
    let sqlText = `DELETE FROM shoppingList;`;
    pool.query(sqlText).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;