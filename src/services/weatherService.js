import {fetchJson} from '../lib/fetchJson';

const API = 'https://api.openweathermap.org/data/2.5/weather'
const KEY = 950b08de4e842f599953f53e55e5c78b;]

export async function getCurrent({ lat, lon, units='imperial'}) {
    const url = '${API}?lat=${lat}&lon=${lon}&appid=${KEY}&units=${units}';
    const data = await fetchJson(url);

    return {
        location: data.name,
        temp: Math.round(data.main.temp),
        condition: data.weather?.[0]?.main ?? '',
        icon: data.weather?.[0]?.icon ?? '',
    };
}