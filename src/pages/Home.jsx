import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main">
        <section className="hero">
          <div className="container">
            <h1 className="heroTitle">
              Каршеринг <span className="highlight">CarShare</span>
            </h1>
            <p className="heroSubtitle">
              Арендуйте автомобиль прямо сейчас
            </p>
            <div className="heroButtons">
              <a href="/cars" className="primaryBtn">Найти автомобиль</a>
              <a href="/how-it-works" className="secondaryBtn">Как это работает</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home