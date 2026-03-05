import React from 'react';
import { Link } from 'react-router-dom';  // Добавьте этот импорт
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">CARSHARE</span>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/cars">Автомобили</Link></li>
            <li><Link to="/tariffs">Тарифы</Link></li>
            <li><Link to="/admin">Админ</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </nav>

        <div className="profile">
          <button className="profile-btn">
            <span className="profile-icon">👤</span>
            <span className="profile-name">Алексей</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;