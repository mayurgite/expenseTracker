import React from "react";
import "./NetBalance.css";

const NetBalance = ({ entries }) => {
  const income = entries
    .filter((e) => e.type === "Income")
    .reduce((sum, e) => sum + e.amount, 0);
  const expense = entries
    .filter((e) => e.type === "Expense")
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="net-balance-container">
      <h3 className="net-balance-heading">Net Balance: ${income - expense}</h3>
      <p className="net-balance-income">Total Income: ${income}</p>
      <p className="net-balance-expense">Total Expenses: ${expense}</p>
    </div>
  );
};

export default NetBalance;
