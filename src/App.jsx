import { useState, useEffect, useReducer } from 'react';
import {useWeather} from './hooks/useWeather';
import {useQuote} from './hooks/useQuote';
import {useImages} from './hooks/useImages';
import WeatherCard from './components/WeatherCard';
import QuoteCard from './components/QuoteCard';
import ImageCarousel from './components/ImageCarousel'

export default function App() {
  const [units, setUnits] = useState('imperial');
  const weather = useWeather(units);

  const quote = useQuote();

  const images = useImages('inspiration');

  return (
    <>
    <h1>Inspirational Homepage</h1>
    <div className="container">
      <div className="grid">
        <WeatherCard data={weather.data} status={weather.status} onUnitsChange={setUnits}/>
        <QuoteCard quote={quote.quote} status={quote.status} onRefresh={quote.refresh} />
        <ImageCarousel
          current={images.current}
          status={images.status}
          onPrev={images.prev}
          onNext={images.next}
        />
      </div>
    </div>
    </>
  );
}
