// InfoCard.js
import React from 'react';


const InfoCard = ({ image, title, description }) => {
  return (
    <div className="info-card">
      <div className="info-card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="info-card-content">
          <h3 className="info-card-title">{title}</h3>
          <p className="info-card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
