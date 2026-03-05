import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import CarDetail from '../components/CarDetail';
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
    const fetchData = async () => {
      try {
        setLoading(true);
        const carsData = await api.getCars();
        const tariffsData = await api.getTariffs();
        const reviewsData = await api.getReviews();
        
        setCars(carsData);
        setTariffs(tariffsData);
        setReviews(reviewsData);
      } catch (err) {
        setError('Ошибка загрузки данных');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (car) => {
    setSelectedCar(car);
    // Прокрутка вверх при открытии деталей
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {/* Hero секция */}
        <section className="hero">
          <div className="container">
            <h1>CarShare</h1>
            <p>Премиальный каршеринг в Бишкеке и в СНГ</p>
          </div>
        </section>

        {/* Секция автомобилей */}
        <section className="cars-section">
          <div className="container">
            <h2>Наши автомобили</h2>
            
            {selectedCar ? (
              <CarDetail car={selectedCar} onBack={handleBackToList} />
            ) : (
              <div className="cars-grid">
                {cars.map(car => (
                  <div key={car.id} className="car-card">
                    <img src={car.image} alt={`${car.brand} ${car.model}`} />
                    <div className="car-info">
                      <h3>{car.brand} {car.model}</h3>
                      <p className="car-price">{car.price} сом/день</p>
                      <div className="car-specs">
                        <span>{car.year}</span>
                        <span>{car.fuel}</span>
                        <span>{car.transmission}</span>
                      </div>
                      <button 
                        className="details-btn"
                        onClick={() => handleDetailsClick(car)}
                      >
                        Подробнее
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Секция тарифов */}
        <section className="tariffs-section">
          <div className="container">
            <h2>Тарифы</h2>
            <div className="tariffs-grid">
              {tariffs.map(tariff => (
                <div key={tariff.id} className="tariff-card">
                  <h3>{tariff.name}</h3>
                  <p className="tariff-price">{tariff.price} сом/{tariff.period}</p>
                  <ul>
                    {tariff.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция отзывов */}
        <section className="reviews-section">
          <div className="container">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;