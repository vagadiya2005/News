import React from 'react';
import '../App.css'; // Import the stylesheet

export default function Midsection() {
  return (
    <div>
      <div className="midsection container-fluid">
        <div className="row justify-content-center">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
              <div className="container-box"></div>
            </div>
          ))}
        </div>
        <div className="text-center my-4">
          <h2 style={{ fontWeight: 800 }}>SHREEJI INTERNATIONAL</h2>
          <h3>IMPORT | EXPORT</h3>
        </div>
      </div>

      <div className="home-cards container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 mb-4 d-flex">
            <div className="card flex-grow-1" style={{ backgroundColor: 'rgb(187, 186, 186)' }}>
              <div className="row g-0">
                <div className="col-12 col-md-4">
                  <img src="https://shreejiinternationals.in/Resources/Images/agrochemicalsFarming_01.png" className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Why Shreeji International</h5>
                    <p className="card-text">Shreeji international has been the leading supplier and exporter of chemicals for many years. With clients ranging from big to small and medium-sized companies across the globe.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5 mb-4 d-flex">
            <div className="card flex-grow-1" style={{ backgroundColor: 'rgb(187, 186, 186)' }}>
              <div className="row g-0">
                <div className="col-12 col-md-4">
                  <img src="https://shreejiinternationals.in/Resources/Images/steven-weeks-DUPFowqI6oI-unsplash.jpg" className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">The Best Crop Protection Comes From Your Own Plant Resistance</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services container-fluid mb-5">
        <div className="text-center my-4">
          <h2 style={{ fontWeight: 500 }}>OUR SERVICE</h2>
          <h4 style={{ fontWeight: 350 }}>Our wide range of agrochemical services include:</h4>
        </div>
        <ul className="list-unstyled">
          <li>Advice and information on when and where to use our pesticides products</li>
          <li>Products for hobby farmers through to agricultural operations - all in simple convenient packaging</li>
          <li>Specialist products supporting a diverse range of crops including:</li>
        </ul>
        <div className="cards row">
          {/* Add your responsive cards here */}
        </div>
      </div>
    </div>
  );
}
