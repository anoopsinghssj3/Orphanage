import axios from 'axios'
import React, { useState } from 'react'

function TransReport() {
    const [donations, setDonations] = useState([]);
    const [expenses, setExpenses] = useState([]);

    axios.get("http://localhost:5000/reports",
        { donations, expenses }
    )
    return (<>
        <h2 className='offset-5'>Transection Report</h2>

        <div className="donations offset-5">Donations</div>
        <ul>
            {donations.map((d, i) => (
            <li key={i}>
                {d.donorName}
                {d.donorEmail}
                {d.donorNumber}
                {d.amount}
            </li>
            ))}
        </ul>
        <br />
        <br /> <hr />

        <div className="expenses offset-5">Expenses</div>
        <ul>
            {expenses.map((ex, i) => (
                <li key={i}>
                    {ex.adminName}
                    {ex.adminEmail}
                    {ex.adminNumber}
                    {ex.amount}
                    {ex.food}
                </li>
            ))}
        </ul>

    </>
    )
}

export default TransReport