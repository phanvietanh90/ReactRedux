import axios from 'axios';

const API_KEY = 'b4f9bfa109009302a808bdb5f7f31665';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},vn`;
    const request = axios.get(url);
    console.log('request:',request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}