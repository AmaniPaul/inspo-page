import {fetchJson} from './fetchJson.js';

const API = 'https://api.openweathermap.org/data/2.5/weather';
const KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Get current weather from coordinates
export async function getCurrentWeather({ lat, lon, units='metric'}) {
    const url = `${API}?lat=${lat}&lon=${lon}&appid=${KEY}&units=${units}`;
    const data = await fetchJson(url);

    return {
        location: data.name,
        temp: Math.round(data.main?.temp ?? 0),
        condition: data.weather?.[0]?.main || '—',
        icon: data?.weather?.[0]?.icon
    }
}