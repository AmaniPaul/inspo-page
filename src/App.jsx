import { useState, useEffect, useReducer } from 'react';
import {useWeather} from './hooks/useWeather';
import {useQuote} from './hooks/useQuote';
import WeatherCard from './components/WeatherCard';
import QuoteCard from './components/QuoteCard';

export default function App() {
  const [units, setUnits] = useState('imperial');
  const weather = useWeather(units);

  const quote = useQuote();

  return (
    <>
    <h1>Inspirational Homepage</h1>
    <div className="container">
      <div className="grid">
        <WeatherCard data={weather.data} status={weather.status} onUnitsChange={setUnits}/>
        <QuoteCard quote={quote.quote} status={quote.status} onRefresh={quote.refresh} />
      </div>
    </div>
    </>
  );
}
