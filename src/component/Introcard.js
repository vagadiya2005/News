import React from 'react';
import './midsection.css';  // Import the CSS file for the card styles

const IntroCard = () => {
  return (

    <div className="intro-cards container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5 mb-4 d-flex">
          <div className="card flex-grow-1 intro-card">
            <div className="row g-0">
              <div className="col-12 col-md-4">
                <img
                  src="/asset/images/first.jpeg"
                  className="img-fluid rounded-start h-100"
                  alt="Agrochemicals"
                />
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Why choose Shreeji International</h5>
                  <p className="card-text">
                    Shreeji International has been the leading supplier and exporter of chemicals for many years. With clients ranging from big to small and medium-sized companies across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 mb-4 d-flex">
          <div className="card flex-grow-1 intro-card">
            <div className="row g-0">
              <div className="col-12 col-md-4">
                <img
                  src="asset/images/Designer.jpeg"
                  className="img-fluid rounded-start h-100"
                  alt="The key to success"
                />
              </div>
              <div className="col-12 col-md-8">
                <div className="card-body">
                  <h5 className="card-title slogan">Quality: The Key to Success</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo col-12 col-md-6 col-lg-5 mb-4 d-flex">
          <h3 className="logo">
            <img
              src="asset/images/logo.png"
              className="img-fluid rounded-start h-100"
              alt="Company Logo"
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
