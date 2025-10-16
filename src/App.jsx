import { useState, useEffect, useReducer } from 'react';
import {useWeather} from './hooks/useWeather';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const [units, setUnits] = useState('imperial');
  const weather = useWeather(units);

  return (
    <>
    <h1>Inspirational Homepage</h1>
    <div className="container">
      <div className="grid">
        <WeatherCard data={weather.data} status={weather.status} onUnitsChange={setUnits}/>
      </div>
    </div>
    </>
  );
}
