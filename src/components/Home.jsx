import React from 'react';
import Heroes from '../pages/Heroes';
import { Link } from "react-router-dom"
import About from '../pages/About';

function Home() {

  return (
    <>
      <Heroes />

      <div className='p-4 fs-1'>
        OrphanCare Foundation advocates and works to give children in institutions and unplanned newborn babies the opportunity to grow in the care of a family.
      </div>

      <div className="d-flex justify-content-center m-4">
        <Link className="text-warning text-decoration-none fs-5" to="/about" >About Us &#11166;</Link></div>
    </>
  );
}

export default Home;