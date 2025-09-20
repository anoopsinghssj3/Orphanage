// DonateInfo.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function DonateInfo() {
  const location = useLocation();
  const navigate = useNavigate();

  // Try router state first, fallback to sessionStorage
  const initialAmount =
    location.state?.amount ??
    (sessionStorage.getItem("donationAmount") ? Number(sessionStorage.getItem("donationAmount")) : "");

  const [amount, setAmount] = useState(initialAmount);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorNumber, setDonorNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // If no amount available, send user back to the amount page
  useEffect(() => {
    if (!amount && amount !== 0) {
      // Replace "/donate" with your amount-selection route if it's different
      navigate("/donate", { replace: true });
    }
  }, [amount, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) {
      alert("Donation amount missing. Please go back and select an amount.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        donorName,
        donorEmail,
        donorNumber,
        amount, // include amount here
      };

      // Example POST to backend — adjust URL as needed
      const res = await axios.post("/api/donate", payload);

      // Clear stored amount (if you want)
      sessionStorage.removeItem("donationAmount");

      // Redirect to a success page, or show a message
      navigate("/donation-success", { state: { amount, serverResponse: res.data } });
    } catch (err) {
      console.error(err);
      setError("Failed to submit donation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-danger min-vh-100 d-flex flex-column justify-content-start align-items-center py-5">
      <h2 className="text-light mb-4">Donor Info</h2>

      <form
        onSubmit={handleSubmit}
        className="card shadow p-4 rounded-4 text-dark fw-semibold"
        style={{ width: "26rem" }}
      >
        {/* Show donation amount (readonly) */}
        <div className="alert alert-info text-center fw-bold fs-5">
          Donation Amount: ₹ {amount}
        </div>

        {/* Hidden amount (so it is included if needed in a native form submit) */}
        <input type="hidden" name="amount" value={amount} />

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Donor Name:</label>
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

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Donor Email:</label>
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
          <label htmlFor="number" className="form-label">Donor Number:</label>
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

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success w-50" disabled={loading}>
            {loading ? "Processing..." : "Donate"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default DonateInfo;
