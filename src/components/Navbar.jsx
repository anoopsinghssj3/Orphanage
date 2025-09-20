import React from 'react';
import { FaCow } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
                 <FaCow fontSize="3rem"/>
                  Pasupatinath Foundation
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left Navigation */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item home-navitem">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item about-navitem">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/expense" className="btn btn-warning me-2 mt-1">Expense</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reports" className="btn btn-info me-2 mt-1">Reports</Link>
                        </li>

                        {/* Dropdown */}
                        <li className="nav-item dropdown mt-1">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Know More...
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/our-work">Our Work</Link></li>
                                <li><Link className="dropdown-item" to="/our-impact">Our Impact</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Right Button */}
                    <div className="d-flex">
                        <Link to="/donate" className="btn btn-success">Donate</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
