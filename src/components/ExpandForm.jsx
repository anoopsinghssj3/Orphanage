// import React, { useState } from "react"
// import axios from "axios"

// function ExpandForm() {
//     const [adminName, setAdminName] = useState("");
//     const [adminEmail, setAdminEmail] = useState("");
//     const [adminNumber, setAdminNumber] = useState("");
//     const [food, setFood] = useState("");
//     const [amount, setAmount] = useState();

//     const handleSubmit = (e) => {
//         e.preventDefault();


//         axios.post("http://localhost:5000/expense",
//             { adminName, adminEmail, adminNumber, food, amount });

//         console.log({
//             adminName,
//             adminEmail,
//             adminNumber,
//             amount,
//             food
//         })
//     }

//     return (<>
//         <h3 className="mb-4 offset-5 ">Admin Expanding Form</h3>

//         <form
//             onSubmit={handleSubmit}
//             action="" className="d-flex flex-column w-25 offset-5 border border-2 border-dark p-4 rounded-3 bg-success text-light fw-bold ">

//             <label htmlFor="adminName">Admin Name: </label>
//             <input className="mb-4"
//                 type="text"
//                 name="adminName"
//                 id="adminName"
//                 value={adminName}
//                 onChange={(e) => setAdminName(e.target.value)} />

//             <label htmlFor="adminName">Admin Email: </label>
//             <input className="mb-4"
//                 type="email"
//                 name="adminEmail"
//                 id="adminEmail"
//                 value={adminEmail}
//                 onChange={(e) => setAdminEmail(e.target.value)} />

//             <label htmlFor="adminNumber">Admin Number: </label>
//             <input className="mb-4"
//                 type="text"
//                 name="adminNumber"
//                 id="adminNumber"
//                 value={adminNumber}
//                 onChange={(e) => setAdminNumber(e.target.value)} />

//             <label htmlFor="food">Food: </label>
//             <input className="mb-4"
//                 type="text"
//                 name="food"
//                 id="food"
//                 value={food}
//                 onChange={(e) => setFood(e.target.value)} />

//             <label htmlFor="amount">Amount: </label>
//             <input className="mb-4"
//                 type="text"
//                 name="amount"
//                 id="amount"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)} />

//             <button type="submit" className="bg-primary text-white">Buy</button>
//         </form>
//     </>
//     )
// }

// export default ExpandForm
import React from 'react';
import ExpandData from "../pages/ExpandData";
import { Link } from 'react-router-dom';

function ExpandForm() {
    return (
        <>
            <div className="expand-form p-4  bg-danger">
                <div className="row d-flex  justify-content-center">
                    {ExpandData.map((item, index) => (
                        <div className="card pt-3 m-4 shadow-lg rounded-3" style={{ width: '20rem' }}>
                            <div key={index}>
                                <div className='d-flex'>
                                    <div>
                                        <img src={item.src} className="card-img-top " alt="..." style={{ height: "194px", width: "148px" }} />
                                    </div>

                                    <div className=" p-3  position-relative text-light 
                                weight-box bg-brown text-white px-3 py-1 rounded-start mt-1
                                " >
                                        <div className="mb-2 rotate-text fs-2 bg-primary special p-2 text-center d-flex align-items-center " style={{ height: '7.5rem', width: "8.75rem",lineHeight:"1.25" }}>{item.title}

                                        </div>
                                        <div className="bg-primary position-absolute bottom-0 text-center fs-4 ms-1 special-2" style={{ width: "7.75rem" }}>
                                            {item.weight} {item.age}
                                        </div>
                                    </div>

                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                </div>
                                <div className="ms-3 text-secondary position-absolute translate-middle-y">
                                    <span className="fw-bold ">&#8377;{item.price} </span>,
                                    <span className="fw-semibold">{item.weight}</span>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="card-link btn btn-warning px-3">Add to cart</a>
                                    <a href="#" className="card-link btn btn-success w-50">Buy</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>);
}

export default ExpandForm;
