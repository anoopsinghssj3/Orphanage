import axios from 'axios';
import React, { useState, useEffect } from 'react';

function TransReport() {
  const [donations, setDonations] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/reports")
      .then(res => {
        setDonations(res.data.donations || []);
        setExpenses(res.data.expenses || []);
      })
      .catch(err => {
        console.error("Error fetching reports:", err);
      });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Transaction Report</h2>

      {/* Donations Section */}
      <div className="mb-4">
        <h4 className="text-primary">Donations</h4>
        <ul className="list-group">
          {donations.length > 0 ? (
            donations.map((d, i) => (
              <li key={i} className="list-group-item">
                <strong>Name:</strong> {d.donorName} <br />
                <strong>Email:</strong> {d.donorEmail} <br />
                <strong>Number:</strong> {d.donorNumber} <br />
                <strong>Amount:</strong> ₹{d.amount}
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No donations found</li>
          )}
        </ul>
      </div>

      <hr />

      {/* Expenses Section */}
      <div className="mb-4">
        <h4 className="text-danger">Expenses</h4>
        <ul className="list-group">
          {expenses.length > 0 ? (
            expenses.map((ex, i) => (
              <li key={i} className="list-group-item">
                <strong>Admin:</strong> {ex.adminName} <br />
                <strong>Email:</strong> {ex.adminEmail} <br />
                <strong>Number:</strong> {ex.adminNumber} <br />
                <strong>Amount:</strong> ₹{ex.amount} <br />
                <strong>Category:</strong> {ex.food}
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No expenses found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TransReport;
