import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const formRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation
        const form = formRef.current;

        if (form.checkValidity() === false) {
            form.classList.add('was-validated');


            if (getdata && getdata.data && getdata.data.name) {
                redirect("/admin/home", { state: { email: getdata.data.email } });
            } else {
                console.warn("Admin data not found after registration.");
            }
        }

        else {
            // (alert("Form submitted successfully!"));
        }

        axios.post("http://localhost:5000/signup", { name, email,mobile, password })
            .then(result => {
                alert("Signup Successfully", result);
                navigate("/login");
            })
            .catch(err => console.log(err));


    };

    return (
        <div className="signup vh-100 d-flex flex-column align-items-center justify-content-center p-2 bg-danger">
            <div className="d-flex flex-column align-items-center">
                <h2 className="fw-bold text-light">Sign Up</h2>
            </div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="d-flex justify-content-center bg-primary needs-validation p-3  gap-2 row cols shadow-lg  bg-body-tertiary rounded mb-5 "
                noValidate
                style={{ width: "26rem" }}
            >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" name="name" id="name" autoComplete="off" required placeholder="Enter your full name"
                        onChange={(e) => setName(e.target.value)} />
                    <div className="invalid-feedback">Name is required!</div>
                </div>
                {/* 
                <div>
                    <label htmlFor="username">Username:</label>
                    <input className="form-control" type="text" name="username" id="username" required placeholder="enter any username" autoComplete="off" />
                    <div className="invalid-feedback">Username is required!</div>
                </div> */}


                <div>
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email" id="email" required placeholder="example@gmail.com" autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)} />
                    <div className="invalid-feedback">Email is required!</div>
                </div>

                <div>
                    <label htmlFor="mobile">Mobile:</label>
                    <input className="form-control" type="text" name="mobile" id="mobile" required placeholder="+91 _______________" autoComplete="off"
                     onChange={(e) => setMobile(e.target.value)} />
                    
                    <div className="invalid-feedback">Mobile number is required!</div>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="password" name="password" id="password" required placeholder=" enter password" autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className="invalid-feedback">Password is required!</div>
                </div>

                <div className="w-100 d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-danger text-light w-50">Sign Up</button>
                </div>
                <div className=" d-flex justify-content-center">
                    <p className="">OR</p>
                </div>

                <div className="w-100 d-flex justify-content-center">
                    <button type="button" className="btn btn-danger text-light w-50">
                        Continue with Gmail                     </button>
                </div>

                <div className="w-100 d-flex justify-content-center">
                    <p className="">
                        Already have an account?
                        <Link to="/login" className="ms-2  text-decoration-underline" href="#">
                            Login
                        </Link>
                    </p>
                </div>

            </form>
        </div>
    );
}

export default SignUp;
