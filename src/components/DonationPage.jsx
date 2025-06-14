import React from 'react'
import DonationTemplate from '../pages/DonationTemplate'
import DonationForm_1 from '../pages/DonationForm_1'

function DonationPage() {
    return (

        <div className="donation-page bg-danger d-flex justify-content-center p-3" style={{height:"90.7vh"}}>
            <DonationTemplate />
            <DonationForm_1/>
        </div>

    )
}

export default DonationPage