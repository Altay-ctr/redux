// Имитация задержки сети
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ApiService {
  // Базовый метод для получения данных с задержкой
  async fetchData(endpoint) {
    try {
      // Имитируем задержку сети (1-3 секунды)
      const delayTime = Math.floor(Math.random() * 2000) + 1000; // 1-3 секунды
      await delay(delayTime);
      
      const response = await fetch(`/data.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Возвращаем конкретный endpoint
      return data[endpoint];
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  // Методы для получения разных данных
  async getCars() {
    return this.fetchData('cars');
  }

  async getCarById(id) {
    const cars = await this.getCars();
    return cars.find(car => car.id === parseInt(id));
  }

  async getTariffs() {
    return this.fetchData('tariffs');
  }

  async getReviews() {
    return this.fetchData('reviews');
  }

  async getLocations() {
    return this.fetchData('locations');
  }

  // Получить все данные сразу (для главной)
  async getAllData() {
    try {
      const delayTime = Math.floor(Math.random() * 2000) + 1000;
      await delay(delayTime);
      
      const response = await fetch('/data.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all data:', error);
      throw error;
    }
  }
}

export default new ApiService();