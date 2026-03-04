import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/" className="logoLink">
            <span className="logoIcon"></span>
            <span className="logoText">CarShare</span>
          </a>
        </div>
        <nav className="nav">
          <ul className="navList">
            <li className="navItem"><a href="/" className="navLink">Главная</a></li>
            <li className="navItem"><a href="/cars" className="navLink">Автомобили</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header