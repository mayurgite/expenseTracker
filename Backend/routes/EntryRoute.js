const express = require('express');
const Entry = require('../model/entrymodel');

const router = express.Router();

// @route   POST /api/entries
// @desc    Add a new entry (expense/income)
// @access  Public
router.post('/', async (req, res) => {
  const { amount, description, date, type } = req.body;

  if (!amount || !description || !date || !type) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const entry = new Entry({ amount, description, date, type });
    const savedEntry = await entry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add entry.', error: error.message });
  }
});

// @route   GET /api/entries
// @desc    Get all entries
// @access  Public
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: -1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch entries.', error: error.message });
  }
});

// @route   DELETE /api/entries/:id
// @desc    Delete an entry by ID
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ message: 'Entry not found.' });
    }

    //await entry.remove();
    await Entry.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Entry deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete entry.', error: error.message });
  }
});

module.exports = router;
