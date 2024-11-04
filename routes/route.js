const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, addItem, updateItem, deleteItem } = require('../models/model');

// GET: Retrieve all items
router.get('/', (req, res) => {
    res.json(getAllItems());
});

// GET: Retrieve a single item by ID
router.get('/:id', (req, res) => {
    const item = getItemById(parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// POST: Add a new item
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newItem = addItem(title, description);
    res.status(201).json(newItem);
});

// PUT: Update an item by ID
router.put('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const { title, description } = req.body;
    const updatedItem = updateItem(itemId, title, description);

    if (updatedItem) {
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE: Remove an item by ID
router.delete('/:id', (req, res) => {
    const deletedItem = deleteItem(parseInt(req.params.id));
    if (deletedItem) {
        res.json(deletedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});


module.exports = router;
