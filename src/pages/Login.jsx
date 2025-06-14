import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            return;
        }

        axios.post("http://localhost:5000/login", { email, password })
            .then(result => {
                alert("Login Successfully");
                navigate("/donate");

            })
            .catch(err => console.log(err));
    };

    return (
        <div className="login d-flex flex-column align-items-center justify-content-center p-3 bg-danger" style={{ height: "90.7vh" }}>
            <div className="d-flex flex-column align-items-center">
                <h2 className="fw-bold text-light">Login</h2>
            </div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="d-flex justify-content-center bg-primary needs-validation gap-2 row cols shadow-lg p-3 bg-body-tertiary rounded mb-5"
                noValidate
                style={{ width: "26rem" }}
            >

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">Email is required!</div>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        required
                        placeholder="enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">Password is required!</div>
                </div>

                <div className="w-100 d-flex justify-content-center">
                    <button type="submit" className="btn btn-success text-light mt-3 w-50"
                    >Login</button>
                    </div>



                <div className="d-flex justify-content-center">
                    <p>OR</p>
                </div>

                <div className="w-100 d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-danger text-light w-50">
                        Login with Gmail
                    </button>
                </div>

                <div className="w-100 d-flex justify-content-center">
                    <p className="">
                        Don't have an account?
                        <Link to="/signup" className="text-decoration-underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form >
        </div >
    );
}

export default Login;
