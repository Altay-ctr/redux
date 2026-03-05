import React, { useState, useEffect } from 'react';
import './CarManager.css';

const CarManager = () => {
  // Состояние для списка машин
  const [cars, setCars] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    fuel: 'Бензин',
    transmission: 'Автомат',
    seats: '',
    image: '',
    description: '',
    features: ''
  });

  // Загружаем машины при запуске
  useEffect(() => {
    const savedCars = localStorage.getItem('cars');
    if (savedCars) {
      setCars(JSON.parse(savedCars));
    } else {
      // Начальные данные
      const initialCars = [
        {
          id: 1,
          brand: 'BMW',
          model: 'M5',
          year: 2024,
          price: 8500,
          fuel: 'Бензин',
          transmission: 'Автомат',
          seats: 5,
          image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=500',
          description: 'Спортивный седан',
          features: ['Спорт режим', 'M пакет']
        },
        {
          id: 2,
          brand: 'Porsche',
          model: '911',
          year: 2024,
          price: 15000,
          fuel: 'Бензин',
          transmission: 'Робот',
          seats: 4,
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500',
          description: 'Спортивный автомобиль',
          features: ['Спорт выхлоп', 'Кожаный салон']
        }
      ];
      setCars(initialCars);
      localStorage.setItem('cars', JSON.stringify(initialCars));
    }
  }, []);

  // Сохраняем в localStorage при изменении
  useEffect(() => {
    if (cars.length > 0) {
      localStorage.setItem('cars', JSON.stringify(cars));
    }
  }, [cars]);

  // Обработка изменений в форме
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Очистка формы
  const resetForm = () => {
    setFormData({
      brand: '',
      model: '',
      year: '',
      price: '',
      fuel: 'Бензин',
      transmission: 'Автомат',
      seats: '',
      image: '',
      description: '',
      features: ''
    });
    setEditingId(null);
  };

  // CREATE - Добавление машины
  const handleAddCar = (e) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.brand || !formData.model || !formData.year || !formData.price) {
      alert('Заполните обязательные поля');
      return;
    }

    const newCar = {
      id: Date.now(), // уникальный ID
      brand: formData.brand,
      model: formData.model,
      year: parseInt(formData.year),
      price: parseInt(formData.price),
      fuel: formData.fuel,
      transmission: formData.transmission,
      seats: parseInt(formData.seats) || 5,
      image: formData.image || 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=500',
      description: formData.description || 'Автомобиль в отличном состоянии',
      features: formData.features ? formData.features.split(',').map(f => f.trim()) : ['Стандарт']
    };

    setCars([...cars, newCar]);
    resetForm();
    alert('Машина успешно добавлена!');
  };

  // UPDATE - Начало редактирования
  const handleEdit = (car) => {
    setEditingId(car.id);
    setFormData({
      brand: car.brand,
      model: car.model,
      year: car.year,
      price: car.price,
      fuel: car.fuel,
      transmission: car.transmission,
      seats: car.seats,
      image: car.image,
      description: car.description,
      features: car.features.join(', ')
    });
  };

  // UPDATE - Сохранение изменений
  const handleUpdateCar = (e) => {
    e.preventDefault();
    
    const updatedCars = cars.map(car => {
      if (car.id === editingId) {
        return {
          ...car,
          brand: formData.brand,
          model: formData.model,
          year: parseInt(formData.year),
          price: parseInt(formData.price),
          fuel: formData.fuel,
          transmission: formData.transmission,
          seats: parseInt(formData.seats) || 5,
          image: formData.image,
          description: formData.description,
          features: formData.features ? formData.features.split(',').map(f => f.trim()) : car.features
        };
      }
      return car;
    });

    setCars(updatedCars);
    resetForm();
    alert('Машина успешно обновлена!');
  };

  // DELETE - Удаление машины
  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить эту машину?')) {
      const filteredCars = cars.filter(car => car.id !== id);
      setCars(filteredCars);
      alert('Машина удалена');
    }
  };

  return (
    <div className="car-manager">
      <h2>Управление автомобилями</h2>

      {/* Форма добавления/редактирования */}
      <div className="car-form-container">
        <h3>{editingId ? 'Редактировать автомобиль' : 'Добавить новый автомобиль'}</h3>
        <form onSubmit={editingId ? handleUpdateCar : handleAddCar} className="car-form">
          <div className="form-row">
            <div className="form-group">
              <label>Марка *</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                required
                placeholder="BMW"
              />
            </div>
            <div className="form-group">
              <label>Модель *</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                required
                placeholder="M5"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Год *</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
                placeholder="2024"
              />
            </div>
            <div className="form-group">
              <label>Цена (₽/день) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                placeholder="8500"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Топливо</label>
              <select name="fuel" value={formData.fuel} onChange={handleInputChange}>
                <option value="Бензин">Бензин</option>
                <option value="Дизель">Дизель</option>
                <option value="Электро">Электро</option>
                <option value="Гибрид">Гибрид</option>
              </select>
            </div>
            <div className="form-group">
              <label>КПП</label>
              <select name="transmission" value={formData.transmission} onChange={handleInputChange}>
                <option value="Автомат">Автомат</option>
                <option value="Механика">Механика</option>
                <option value="Робот">Робот</option>
              </select>
            </div>
            <div className="form-group">
              <label>Мест</label>
              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleInputChange}
                placeholder="5"
              />
            </div>
          </div>

          <div className="form-group">
            <label>URL изображения</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="https://example.com/car.jpg"
            />
          </div>

          <div className="form-group">
            <label>Описание</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="2"
              placeholder="Описание автомобиля"
            />
          </div>

          <div className="form-group">
            <label>Особенности (через запятую)</label>
            <input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleInputChange}
              placeholder="Спорт режим, M пакет, Кожа"
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-submit">
              {editingId ? 'Обновить' : 'Добавить'}
            </button>
            {editingId && (
              <button type="button" className="btn-cancel" onClick={resetForm}>
                Отмена
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Список автомобилей */}
      <div className="cars-list">
        <h3>Список автомобилей ({cars.length})</h3>
        
        {cars.length === 0 ? (
          <p className="no-cars">Нет добавленных автомобилей</p>
        ) : (
          <div className="cars-table">
            <div className="table-header">
              <div>ID</div>
              <div>Марка</div>
              <div>Модель</div>
              <div>Год</div>
              <div>Цена</div>
              <div>Действия</div>
            </div>
            
            {cars.map(car => (
              <div key={car.id} className="table-row">
                <div>{car.id}</div>
                <div>{car.brand}</div>
                <div>{car.model}</div>
                <div>{car.year}</div>
                <div>{car.price.toLocaleString()} ₽</div>
                <div className="actions">
                  <button onClick={() => handleEdit(car)} className="btn-edit" title="Редактировать">
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(car.id)} className="btn-delete" title="Удалить">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarManager;