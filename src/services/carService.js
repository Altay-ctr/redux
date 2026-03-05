import api from './Api';

class CarService {
  // Получить все автомобили (READ - все)
  async getAllCars() {
    try {
      const cars = await api.getCars();
      return { success: true, data: cars };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Получить один автомобиль по ID (READ - один)
  async getCarById(id) {
    try {
      const car = await api.getCarById(id);
      if (car) {
        return { success: true, data: car };
      } else {
        return { success: false, error: 'Автомобиль не найден' };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Создать новый автомобиль (CREATE)
  async createCar(carData) {
    try {
      // Получаем существующие автомобили
      const cars = await api.getCars();
      
      // Создаем новый автомобиль с новым ID
      const newCar = {
        id: Math.max(...cars.map(c => c.id)) + 1,
        ...carData,
        features: carData.features.split(',').map(f => f.trim())
      };
      
      // Добавляем в массив
      cars.push(newCar);
      
      // В реальном проекте здесь был бы POST запрос на сервер
      // Для демо просто возвращаем успех
      return { success: true, data: newCar };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Обновить автомобиль (UPDATE)
  async updateCar(id, carData) {
    try {
      const cars = await api.getCars();
      const index = cars.findIndex(c => c.id === parseInt(id));
      
      if (index === -1) {
        return { success: false, error: 'Автомобиль не найден' };
      }
      
      // Обновляем данные
      const updatedCar = {
        ...cars[index],
        ...carData,
        features: carData.features ? carData.features.split(',').map(f => f.trim()) : cars[index].features
      };
      
      cars[index] = updatedCar;
      
      return { success: true, data: updatedCar };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Удалить автомобиль (DELETE)
  async deleteCar(id) {
    try {
      const cars = await api.getCars();
      const filteredCars = cars.filter(c => c.id !== parseInt(id));
      
      if (filteredCars.length === cars.length) {
        return { success: false, error: 'Автомобиль не найден' };
      }
      
      return { success: true, data: filteredCars };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

export default new CarService();