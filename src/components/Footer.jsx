import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Бренд */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">CARSHARE</span>
            </div>
            <p className="footer-description">
              Премиальный каршеринг в Бишкеке и СНГ
            </p>
          </div>

          {/* Навигация */}
          <div className="footer-section">
            <h3 className="footer-title">Навигация</h3>
            <ul className="footer-menu">
              <li><a href="/">Главная</a></li>
              <li><a href="/cars">Автомобили</a></li>
              <li><a href="/tariffs">Тарифы</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-contacts">
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:88001234567">+996 (709) 633 179</a>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@carshare.ru">info@carshare.kg</a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>Бишкек, ул. Кулиева 69</span>
              </li>
            </ul>
          </div>

          {/* Соцсети */}
          <div className="footer-section">
            <h3 className="footer-title">Мы в соцсетях</h3>
            <div className="footer-social">
              <a href="#" className="social-link">Telegram</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
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