const axios = require('axios');

const API = 'b8925685667559780307594e33546389';
const units = 'metric';

const getWeather = async(lat, lon) => {
    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=${units}`);
    return clima.data.main.temp;
};
module.exports = {
    getWeather
}