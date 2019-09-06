const express = require('express');

const router = express.Router();

// Event Model
const Event = require('../../models/Event');

// @route   GET api/events
// @desc    GET all events
// @access  Public
router.get('/', (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then(events => res.json(events));
});

// @route   Post api/events
// @desc    Create an Event
// @access  Public
router.post('/', (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
  });

  newEvent.save().then(event => res.json(event));
});

// @route   DELETE api/events/:id
// @desc    DELETE an Event
// @access  Public
router.delete('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
