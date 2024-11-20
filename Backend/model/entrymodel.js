const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ['Expense', 'Income'], required: true },
});

module.exports = mongoose.model('Entry', entrySchema);
