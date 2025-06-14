import React from 'react'
import * as Fa6Icons from "react-icons/fa6";
function DonationTemplate() {
    return (
        <div className="donation-template d-flex flex-column p-2 rounded-3 text-light fw-bold me-2" style={{ width: "30rem" }}>
            <div className="card">

                <img src="https://ucarecdn.com/b2078fe7-6ef5-4454-9c03-a7733bd9e8ed/-/resize/1032x/-/format/auto/" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5
                        className="card-title text-primary title-name fw-bold"> <Fa6Icons.FaBaby color="" /> OrphanCare</h5>

                    <p className="card-text">Every child deserves a loving family.</p>
                </div>
                <ul className="list-group list-group-flush fw-normal border-0"
                    style={{ fontSize: "0.9rem"}}>

                    <li className="list-group-item" style={{ border: "none" }}>Make a difference with your generosity. OrphanCare works to ensure at-risk children grow up in safe, loving environments.
                    </li>
                    <li className="list-group-item" style={{ border: "none" }}>By giving today, you'll help every child reach their full potential. Together, let's build a brighter future.
                    </li>
                    <li className="list-group-item">Donations can be made with a debit or credit card</li>
                </ul>
            </div>
        </div>


    )
}

export default DonationTemplate