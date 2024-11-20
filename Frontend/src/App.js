import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddEntry from './components/AddEntry';
import ListEntries from '../src/components/ListEntry';
import NetBalance from './components/NetBalance';
import "./App.css";

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await axios.get('http://localhost:5001/api/entries');
      setEntries(response.data);
    };
    fetchEntries();
  }, []);

  const handleAdd = (entry) => {
    setEntries([...entries, entry]);
  };

  const handleDelete = async (id) => {
    try {
      console.log('Deleting entry with id:', id);
      await axios.delete(`http://localhost:5001/api/entries/${id}`);
      setEntries(entries.filter((entry) => entry._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddEntry onAdd={handleAdd} />
      <NetBalance entries={entries} />
      <ListEntries entries={entries} onDelete={handleDelete} />
    </div>
  );
};

export default App;

