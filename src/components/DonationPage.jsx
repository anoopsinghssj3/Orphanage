import React from 'react';
import DonationTemplate from '../pages/DonationTemplate';
import DonationForm_1 from '../pages/DonationForm_1';

function DonationPage() {
  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center align-items-start">
        {/* Left: DonationTemplate */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <DonationTemplate />
        </div>

        {/* Right: DonationForm_1 */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <DonationForm_1 />
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
