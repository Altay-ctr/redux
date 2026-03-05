import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import Loading from './Loading';
import './CarDetail.css';

const CarDetail = ({ carId, onBack }) => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const data = await api.getCarById(carId);
        setCar(data);
      } catch (err) {
        setError('Ошибка при загрузке данных автомобиля');
      } finally {
        setLoading(false);
      }
    };

    if (carId) {
      fetchCar();
    }
  }, [carId]);

  if (loading) return <Loading />;
  if (error) return <div className="error">{error}</div>;
  if (!car) return <div className="error">Автомобиль не найден</div>;

  return (
    <div className="car-detail">
      <button onClick={onBack} className="back-button">← Назад к списку</button>
      
      <div className="car-detail-content">
        <div className="car-detail-image">
          <img src={car.image} alt={`${car.brand} ${car.model}`} />
        </div>
        
        <div className="car-detail-info">
          <h2 className="car-detail-title">{car.brand} {car.model}</h2>
          
          <div className="car-detail-specs">
            <div className="spec-item">
              <span className="spec-label">Год:</span>
              <span className="spec-value">{car.year}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Цена:</span>
              <span className="spec-value">{car.price} ₽/день</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Топливо:</span>
              <span className="spec-value">{car.fuel}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">КПП:</span>
              <span className="spec-value">{car.transmission}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Мест:</span>
              <span className="spec-value">{car.seats}</span>
            </div>
          </div>

          <div className="car-detail-description">
            <h3>Описание</h3>
            <p>{car.description}</p>
          </div>

          <div className="car-detail-features">
            <h3>Особенности</h3>
            <ul className="features-list">
              {car.features.map((feature, index) => (
                <li key={index} className="feature-item">{feature}</li>
              ))}
            </ul>
          </div>

          <button className="rent-button">Арендовать</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;