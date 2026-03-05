import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Левая часть с логотипом и описанием */}
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">CARSHARE</span>
            </div>
            <p className="brand-description">
              Премиальный каршеринг в Москве и СПб
            </p>
          </div>

          {/* Навигация */}
          <div className="footer-nav">
            <h3 className="footer-title">Навигация</h3>
            <ul className="footer-links">
              <li><a href="/">Главная</a></li>
              <li><a href="/cars">Автомобили</a></li>
              <li><a href="/tariffs">Тарифы</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </div>

          {/* Контакты - ИСПРАВЛЕНО */}
          <div className="footer-contacts">
            <h3 className="footer-title">Контакты</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:88001234567">8 (800) 123-45-67</a>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@carshare.ru">info@carshare.ru</a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>Москва, ул. Тверская 15</span>
              </li>
            </ul>
          </div>

          {/* Социальные сети - ИСПРАВЛЕНО */}
          <div className="footer-social">
            <h3 className="footer-title">Мы в соцсетях</h3>
            <div className="social-links">
              <a href="#" className="social-link">Telegram</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} CarShare. Все права защищены.</p>
          <div className="payment-methods">
            <span>Visa</span>
            <span>MasterCard</span>
            <span>Mopar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;