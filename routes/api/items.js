const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.get('/api', (req, res) => {
      Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

router.post('/api/items', (req, res) => {
    //console.log(req.body)
    Item.create({
        name: req.body.name
    }).then(item => res.json(item))
        .catch(err => res.json(err)) 
});

router.delete('/api/items/', (req, res) => {
    Item.findById(req.body.id)
    .then(item => item.remove().then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({sucess: false, error: err}));
});

module.exports = router;