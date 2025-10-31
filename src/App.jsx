import { useState, useEffect, useReducer } from 'react';
import {useWeather} from './hooks/useWeather';
import {useQuote} from './hooks/useQuote';
import {useImages} from './hooks/useImages';
import WeatherCard from './components/WeatherCard';
import QuoteCard from './components/QuoteCard';
import ImageCarousel from './components/ImageCarousel';
import GoalsPanel from './components/goals/GoalsPanel';

// --- Goals state (useReducer) ---
const STORAGE_KEY = 'daily_goals_v1';

function loadGoals() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

function saveGoals(goals) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
};

function goalsReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, {id: crypto.randomUUID(), text: action.text, done: false, createdAt: Date.now() }];
    case 'DELETE': 
      return state.filter(g => g.id !== action.id);
    case 'TOGGLE':
      return state.map(g => g.id === action.id ? { ...g, done: !g.done} : g);
    default:
      return state;
  }
}


export default function App() {
  // Weather hook with unit toggle
  const [units, setUnits] = useState('imperial');
  const weather = useWeather(units);

  // Images + quote hooks
  const quote = useQuote();

  const images = useImages('inspiration');

  // Goals state
  const[goals, dispatch] = useReducer(goalsReducer, [], () => loadGoals());
  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  const addGoal = (text) => dispatch({ type: 'ADD', text});
  const delGoal = (id) => dispatch({ type: 'DELETE', id});
  const toggleGoal = (id) => dispatch({ type: 'TOGGLE', id});

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
        <GoalsPanel
          goals={goals}
          onAdd={addGoal}
          onToggle={toggleGoal}
          onDelete={delGoal}
        />
      </div>
    </div>
    </>
  );
}
