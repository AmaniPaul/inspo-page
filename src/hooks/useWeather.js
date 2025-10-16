//isolates all logic for calling the weather API and formatting the data
import { useEffect, useState } from 'react';
import * as api from '../services/weatherService';

export function useWeather({ units = 'imperial' } = {}) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function run() {
      try {
        setStatus('loading');
        // quick geolocation with fallback
        const pos = await new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(p => res(p.coords), rej, { timeout: 8000 });
        }).catch(() => ({ latitude: 40.7128, longitude: -74.006 })); // NYC fallback
        const w = await api.getCurrent({ lat: pos.latitude, lon: pos.longitude, units });
        if (!ignore) { setData(w); setStatus('success'); }
      } catch (e) {
        if (!ignore) { setError(e); setStatus('error'); }
      }
    }
    run();
    return () => { ignore = true; };
  }, [units]);

  return { data, status, error };
}
