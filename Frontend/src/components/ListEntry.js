import React from 'react';
import './ListEntries.css'; // Import the CSS file

const ListEntries = ({ entries, onDelete }) => {
  return (
    <ul className="entries-list">
      {entries.map((entry) => (
        <li className="entry-item" key={entry._id}>
          <div className="entry-details">
            <span className="entry-date">{entry.date}</span>
            <span className="entry-description">{entry.description}</span>
            <span className={`entry-type ${entry.type.toLowerCase()}`}>
              {entry.type}
            </span>
            <span className="entry-amount">${entry.amount}</span>
          </div>
          <button
            className="delete-button"
            onClick={() => onDelete(entry._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListEntries;
