import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import CarDetail from '../components/CarDetail'; // Этот импорт теперь работает
import api from '../services/Api';
import './Home.css';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [tariffs, setTariffs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        
        const [carsData, tariffsData, reviewsData] = await Promise.all([
          api.getCars(),
          api.getTariffs(),
          api.getReviews()
        ]);

        setCars(carsData);
        setTariffs(tariffsData);
        setReviews(reviewsData);
      } catch (err) {
        setError('Ошибка при загрузке данных');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const handleBackToList = () => {
    setSelectedCar(null);
  };

  if (loading) {
    return (
      <div className="home">
        <Header />
        <Loading />
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="home">
        <Header />
        <div className="error-message">{error}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="home">
      <Header />
      
      <main>
        <section className="hero">
          <h1>Добро пожаловать в CarShare</h1>
          <p>Аренда автомобилей по доступным ценам</p>
        </section>

        <section className="cars-section">
          <h2>Наши автомобили</h2>
          
          {selectedCar ? (
            <CarDetail car={selectedCar} onBack={handleBackToList} />
          ) : (
            <div className="cars-grid">
              {cars.map(car => (
                <div key={car.id} className="car-card">
                  <img src={car.image} alt={`${car.brand} ${car.model}`} />
                  <h3>{car.brand} {car.model}</h3>
                  <p className="price">{car.price} ₽/день</p>
                  <button 
                    onClick={() => handleSelectCar(car)} 
                    className="details-btn"
                  >
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="tariffs-section">
          <h2>Наши тарифы</h2>
          <div className="tariffs-grid">
            {tariffs.map(tariff => (
              <div key={tariff.id} className="tariff-card">
                <h3>{tariff.name}</h3>
                <p className="price">{tariff.price} ₽/{tariff.period}</p>
                <p>Автомобили: {tariff.cars.join(', ')}</p>
                <ul>
                  {tariff.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="reviews-section">
          <h2>Отзывы</h2>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <strong>{review.user}</strong>
                  <span>{'★'.repeat(review.rating)}</span>
                </div>
                <p>{review.comment}</p>
                <small>{review.date}</small>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;