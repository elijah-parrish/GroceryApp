const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get all items from the grocery list
// @access  public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1}) // Built in sort using mongoDB
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create an item in the grocery list
// @access  public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        cost: req.body.cost
    });

    newItem.save() // Saving the item to the DB
        .then(item => res.json(item));
});

// @route   DELETE api/items
// @desc    Delete an item
// @access  public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false})))
});

module.exports = router;