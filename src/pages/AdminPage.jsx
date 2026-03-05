import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarManager from '../components/CarManager';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <Header />
      <main>
        <div className="container">
          <h1>Панель администратора</h1>
          <CarManager />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;