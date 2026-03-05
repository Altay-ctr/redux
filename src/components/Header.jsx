import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">CARSHARE</span>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/">Главная</a></li>
            <li><a href="/cars">Автомобили</a></li>
            <li><a href="/tariffs">Тарифы</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </nav>

        <div className="profile">
          <button className="profile-btn">
            <span className="profile-icon">👤</span>
            <span className="profile-name">Altay</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;