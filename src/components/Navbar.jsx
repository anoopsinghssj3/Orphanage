import React from 'react'
import * as Fa6Icons from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Fa6Icons.FaBuildingNgo  /> Hope NGO
                </a>
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mt-1">
                            <a className="nav-link active " aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item mt-1">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/expense" className="btn btn-warning m-1">Expense</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reports" className="btn btn-info m-1">Reports</Link>
                        </li>
                        <li className="nav-item dropdown ms-1">
                            <a
                                className="btn btn-primary dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Our Work</a></li>
                                <li><a className="dropdown-item" href="#">Our Impact</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Blog</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="navbar-nav d-flex align-items-center py-0">
                        <li className="nav-item">
                            <Link to="/login" className="btn btn-primary m-1">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="btn btn-danger m-1">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/donate" className="btn btn-success m-1">Donate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
