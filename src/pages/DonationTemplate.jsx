import React from 'react';
import * as Fa6Icons from "react-icons/fa6";

function DonationTemplate() {
  return (
    <div className="donation-template p-0 rounded-4 shadow-lg me-2" style={{ maxWidth: "400px", width: "100%" }}>
      <div className="card h-100">
        {/* Card Image */}
        <img
          src="https://ucarecdn.com/b2078fe7-6ef5-4454-9c03-a7733bd9e8ed/-/resize/1032x/-/format/auto/"
          className="card-img-top rounded-top"
          alt="OrphanCare"
        />

        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold d-flex align-items-center gap-2">
            <Fa6Icons.FaBaby />
            OrphanCare
          </h5>
          <p className="card-text text-muted">Every child deserves a loving family.</p>
        </div>

        {/* List Group Info */}
        <ul className="list-group list-group-flush small text-secondary">
          <li className="list-group-item border-0">
            Make a difference with your generosity. OrphanCare works to ensure at-risk children grow up in safe, loving environments.
          </li>
          <li className="list-group-item border-0">
            By giving today, you'll help every child reach their full potential. Together, let's build a brighter future.
          </li>
          <li className="list-group-item">
            Donations can be made with a debit or credit card.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DonationTemplate;
