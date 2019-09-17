const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); // ADDED FOR LOGIN (not required?--just used to protect routes--protects unauthorized
                                                                                                    // from adding/deleting items
const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

router.post('/', auth, (req, res) => {         // "auth" ADDED FOR LOGIN (not required?--just used to protect routes)
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

router.delete('/:id', auth, (req, res) => {     // "auth" ADDED FOR LOGIN (not required?--just used to protect routes)
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;