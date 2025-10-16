import { useEffect, useState } from 'react';
import { getCurrentWeather } from '../api/weather';

// Hook handles geolocation + fetch + basic status flags
export function useWeather(units = 'metric') {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState(null);

  useEffect(() => {
    let canceled = false;

    async function run() {
      setStatus('loading');
      try {
        const coords = await new Promise((resolve) => {
          navigator.geolocation.getCurrentPosition(
            pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
            () => resolve({ lat: 40.7128, lon: -74.0060 }) // fallback: NYC
          );
        });
        const w = await getCurrentWeather({ ...coords, units });
        if (!canceled) { setData(w); setStatus('success'); }
      } catch (e) {
        if (!canceled) { setError(e); setStatus('error'); }
      }
    }

    run();
    return () => { canceled = true; };
    }, [units]

    return { data, status, error };
};