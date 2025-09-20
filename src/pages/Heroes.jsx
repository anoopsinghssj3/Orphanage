import React from 'react';
import cowHeroes from "../../public/images/cow.avif"

function Heroes() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner rounded-3 overflow-hidden shadow">
        <div className="carousel-item active">
          <img
            src={cowHeroes}
            alt="cow"
            className='w-100'
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/diverse-people-refugee-camps_23-2151561513.jpg?ga=GA1.1.475999783.1747633139&semt=ais_hybrid&w=740"
            className="d-block w-100"
            alt="Refugee Camp 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/photorealistic-kid-refugee-camp_23-2151494502.jpg?ga=GA1.1.475999783.1747633139&semt=ais_hybrid&w=740"
            className="d-block w-100"
            alt="Refugee Camp 3"
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Heroes;
