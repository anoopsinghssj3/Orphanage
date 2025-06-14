import React, { useState } from 'react';
import * as Fa6Icons from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DonationForm_1() {
  const [amount, setAmount] = useState("");
  const [food, setFood] = useState("");
  const navigate = useNavigate();

  const handleAmountClick = (amt) => {
    setAmount(amt);
  };

  const handleFoodClick = (category) => {
    setFood(category);
  };

  const handleDonate = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/donate", payload)
      .then(() => navigate("/donateInfo"))
      .catch((err) => console.error("Donation error:", err));
  };

  return (
    <div className="DonationForm_1 mt-2 border-dark d-flex flex-column p-1 rounded-3 bg-light fw-bold me-2"
      style={{ width: "26rem", height: "fit-content" }}>

      <h5 className="d-flex justify-content-center align-items-end">
        <Fa6Icons.FaLock color="green" className='me-2' />
        Secure Donation
      </h5>

      <form onSubmit={handleDonate}>
        {/* plan buttons */}
        <div className="d-flex flex-row justify-content-center px-3 mb-3">
          <button className="btn btn-primary w-50 me-2" type="button">Give Once</button>
          <button className="btn btn-success w-50 ms-2" type="button">Monthly</button>
        </div>

        {/* ₹ buttons */}
        <div className="container px-1 pt-2 mb-2">
          <div className="row">
            {[1000, 500, 200, 100, 50, 10].map((amt) => (
              <div className="col-md-4 mb-3" key={amt}>
                <button
                  type="button"
                  className="btn border border-2 rounded-3 w-100"
                  onClick={() => handleAmountClick(amt)}
                >
                  ₹ {amt}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom amount input */}
        <div className="w-100 p-3 d-flex flex-column justify-content-between align-items-center" style={{ height: "17vh" }}>
          <input
            className="btn border border-2 rounded-3 w-100 text-primary fw-semibold fs-4"
            type="number"
            min={1}
            placeholder="₹ Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Food category buttons */}
        <div className="container px-1 mb-2">
          <div className="row">
            {["Handicap", "Girls", "Foods", "Animals", "Cloths", "Education"].map((cat) => (
              <div className="col-md-4 mb-3" key={cat}>
                <button
                  type="button"
                  className="btn border border-2 rounded-3 w-100"
                  onClick={() => handleFoodClick(cat)}
                >
                  {cat}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Category input */}
        <div className="w-100 p-3 d-flex flex-column justify-content-between align-items-center" style={{ height: "17vh" }}>
          <input
            className="btn border border-2 rounded-3 w-100 text-primary fw-semibold fs-4"
            type="text"
            placeholder="Specially Donating For"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 btn-donate mt-3" type="submit">
          Donate
        </button>
      </form>
    </div>
  );
}

export default DonationForm_1;
