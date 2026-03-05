import React from 'react';
import './CarDetail.css';

const CarDetail = ({ car, onBack }) => {
  if (!car) return null;

  return (
    <div className="car-detail">
      <button onClick={onBack} className="back-button">
        ← Назад к списку
      </button>
      
      <div className="car-detail-content">
        <div className="car-detail-image">
          <img src={car.image} alt={`${car.brand} ${car.model}`} />
        </div>
        
        <div className="car-detail-info">
          <h2>{car.brand} {car.model}</h2>
          <p className="car-detail-price">{car.price} сом/день</p>
          
          <div className="car-detail-specs">
            <p><strong>Год:</strong> {car.year}</p>
            <p><strong>Топливо:</strong> {car.fuel}</p>
            <p><strong>КПП:</strong> {car.transmission}</p>
            <p><strong>Мест:</strong> {car.seats}</p>
          </div>
          
          <p className="car-detail-description">{car.description}</p>
          
          <h3>Особенности:</h3>
          <ul className="features-list">
            {car.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <button className="rent-btn">Арендовать</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;