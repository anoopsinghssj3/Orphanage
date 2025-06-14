import React from 'react'

function Heroes() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/diverse-people-refugee-camps_23-2151561477.jpg?ga=GA1.1.475999783.1747633139&semt=ais_hybrid&w=740" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/diverse-people-refugee-camps_23-2151561513.jpg?ga=GA1.1.475999783.1747633139&semt=ais_hybrid&w=740" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494502.jpg?ga=GA1.1.475999783.1747633139&semt=ais_hybrid&w=740" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>)
}

export default Heroes