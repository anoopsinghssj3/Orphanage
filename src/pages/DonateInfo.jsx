import React, { useState } from "react";
import axios from "axios"
import "react-router-dom"

function DonateInfo() {
    const [donorName, setDonorName] = useState("");
    const [donorEmail, setDonorEmail] = useState("");
    const [donorNumber, setDonorNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/donate",
            { donorName, donorEmail, donorNumber },
        );

        console.log({
            donorName,
            donorEmail,
            donorNumber,
        });
    };

    return (
        <>
            <div className="donation-form_2 d-flex flex-column justify-content-start align-items-center p-2  bg-danger fw-bold pt-3  vh-100">
                <div>
                    <h2 className="text-light">Donar Info</h2>
                </div>

                <div>
                    <form onSubmit={handleSubmit} className="card d-flex flex-column p-4 rounded-3  fw-bold" style={{ width: "26rem", height: "fit-content" }}>
                        <label htmlFor="name">Donor Name:</label>
                        <input
                            placeholder="Donar Name"
                            className="mb-4 form-control"
                            type="text"
                            id="name"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                        />

                        <label htmlFor="email">Donor Email:</label>
                        <input
                            placeholder="Donar Email"
                            className="mb-4 form-control"
                            type="email"
                            id="email"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                        />

                        <label htmlFor="number">Donor Number:</label>
                        <input
                            placeholder="Donar Number"
                            className="mb-4 form-control"
                            type="number"
                            id="number"
                            value={donorNumber}
                            onChange={(e) => setDonorNumber(e.target.value)}
                        />

                        {/* <label htmlFor="amount">Donor Amount:</label>
                    <input
                        className="mb-4"
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    /> */}
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success w-50"                        >
                                Donate
                            </button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DonateInfo