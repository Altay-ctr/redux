import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/cars', label: 'Автомобили' },
    { path: '/tariffs', label: 'Тарифы' },
    { path: '/how-it-works', label: 'Как это работает' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/" className="logoLink">
            <span className="logoIcon">⚡</span>
            <span className="logoText">CARSHARE</span>
          </a>
        </div>

        <nav className="nav">
          <ul className="navList">
            {navLinks.map((link, index) => (
              <li key={index} className="navItem">
                <a href={link.path} className="navLink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="profile-section">
          <button 
            className="profile-button"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="profile-avatar">
              <span className="avatar-icon">👤</span>
            </div>
            <span className="profile-name">Алексей</span>
            <span className="profile-arrow">▼</span>
          </button>

          {isProfileOpen && (
            <div className="profile-dropdown">
              <ul className="dropdown-menu">
                <li><a href="/profile" className="dropdown-item">👤 Мой профиль</a></li>
                <li><a href="/bookings" className="dropdown-item">📅 Мои бронирования</a></li>
                <li><a href="/favorites" className="dropdown-item">❤️ Избранное</a></li>
                <li><a href="/settings" className="dropdown-item">⚙️ Настройки</a></li>
                <li className="dropdown-divider"></li>
                <li><a href="/logout" className="dropdown-item logout">🚪 Выйти</a></li>
              </ul>
            </div>
          )}
        </div>

        <button className="mobileMenuBtn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;