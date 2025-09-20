import React from 'react';
import Heroes from '../pages/Heroes';
import { Link } from "react-router-dom";
import About from '../pages/About';

function Home() {
  return (
    <>
      <Heroes />

      <div className="container my-5">
        <p className="fs-4 text-center fw-semibold">
          OrphanCare Foundation advocates and works to give children in institutions and unplanned newborn babies the opportunity to grow in the care of a family.
        </p>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <Link className="btn btn-warning fw-semibold" to="/about">
          About Us <span className="ms-2">&#11166;</span>
        </Link>
      </div>
    </>
  );
}

export default Home;
