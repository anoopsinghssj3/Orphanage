import React, { useEffect, useRef } from "react";
import DonationTemplate from "../pages/DonationTemplate";
import DonationForm_1 from "../pages/DonationForm_1";

function DonationPage() {
  // In JSX files, don't use TS generics; just initialize with null
  const paymentFormRef = useRef(null);

  useEffect(() => {
    if (!paymentFormRef.current) return;

    // Clear any previous content to avoid duplicates during HMR
    paymentFormRef.current.innerHTML = "";

    // Inject Razorpay payment button script after mount
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", "pl_RJlKqnILA2ea8s");
    paymentFormRef.current.appendChild(script);

    // Observe for the button injected by Razorpay and add Bootstrap classes
    const observer = new MutationObserver(() => {
      const container = paymentFormRef.current;
      if (!container) return;
      const btn = container.querySelector(
        "button, .razorpay-payment-button"
      );
      if (btn) {
        // Example: ensure button has bootstrap styles
        btn.classList.add("btn", "btn-primary", "w-75", "fw-bold", "py-2", "fs-3");
        observer.disconnect();
      }
    });

    observer.observe(paymentFormRef.current, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center align-items-start">
        {/* Left: DonationTemplate */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <DonationTemplate />
        </div>

        {/* Right: DonationForm or Razorpay Button */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="container my-4">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 text-center">
                {/* Razorpay injects the button into this form */}
                <form ref={paymentFormRef}></form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
