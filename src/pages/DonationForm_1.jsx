// DonationForm_1.jsx
import React, { useState } from "react";
import * as Fa6Icons from "react-icons/fa6";
import axios from "axios";

function DonationForm_1() {
  const [amount, setAmount] = useState(""); // donation amount
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorNumber, setDonorNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAmountClick = (amt) => {
    setAmount(Number(amt));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount) {
      alert("Please select or enter an amount.");
      return;
    }

    try {
      setLoading(true);

      const donationData = {
        donorName,
        donorEmail,
        donorNumber,
        amount,
      };

      console.log("Submitting donation:", donationData);

      // Example API call
      // await axios.post("/api/donate", donationData);

      alert(`Thank you ${donorName}, for donating ₹${amount}!`);

      // Reset fields after submit
      setAmount("");
      setDonorName("");
      setDonorEmail("");
      setDonorNumber("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="DonationForm_1 container bg-light p-4 rounded-2 shadow-lg">
      <h5 className="text-center text-success mb-4 d-flex justify-content-center align-items-center gap-2">
        <Fa6Icons.FaLock />
        Secure Donation
      </h5>

      <form onSubmit={handleSubmit}>
        {/* Amount Selection */}
        <div className="d-flex gap-2 mb-4">
          <button className="btn btn-primary w-100" type="button">
            Give Once
          </button>
        </div>

        <div className="row g-3 mb-4 text-primary">
          {[1000, 500, 200, 100, 50, 10].map((amt) => (
            <div className="col-6 col-md-4" key={amt}>
              <button
                type="button"
                className={`btn fw-semibold border w-100 rounded-3 ${
                  amount === Number(amt)
                    ? "btn-primary text-white"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleAmountClick(amt)}
              >
                ₹ {amt}
              </button>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <input
            className="form-control form-control-lg fw-semibold text-primary text-center"
            type="text"
            placeholder="₹ Enter Amount"
            value={amount === "" ? "" : `₹ ${amount}`}
            onChange={(e) => {
              const clean = e.target.value.replace(/[^\d]/g, "");
              setAmount(clean === "" ? "" : Number(clean));
            }}
          />
        </div>

        {/* Donor Info Section */}
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            Donor Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Donor Name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Donor Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Donor Email"
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="form-label">
            Donor Number:
          </label>
          <input
            type="tel"
            id="number"
            className="form-control"
            placeholder="Donor Number"
            value={donorNumber}
            onChange={(e) => setDonorNumber(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center" style={{ marginTop: "2rem" }}>
          <button
            className="btn btn-success w-75 fw-bold py-2 fs-5"
            type="submit"
            disabled={loading}
          >
            {loading ? "Processing..." : "Donate"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DonationForm_1;
