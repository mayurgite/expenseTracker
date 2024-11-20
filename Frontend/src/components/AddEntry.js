import React, { useState } from 'react';
import axios from 'axios';
import './AddEntry.css'; // Import the CSS file

const AddEntry = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    date: '',
    type: 'Expense',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/entries', formData);
      onAdd(response.data);
      setFormData({ amount: '', description: '', date: '', type: 'Expense' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="add-entry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Amount"
          className="form-input"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          className="form-input"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-input"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="type" className="form-label">Type</label>
        <select
          id="type"
          name="type"
          className="form-select"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>

      <button type="submit" className="btn-submit">Add Entry</button>
    </form>
  );
};

export default AddEntry;
