import {useEffect, useState} from 'react';
import {getRandomQuote} form '../api/quotes';

export function useQuote() {
    const [quote, setQuote] = useState(null);
    const [status, setStatus] = useState('idle');

    const refresh = async () => {
        setStatus('loading');
        try {
            const q = await getRandomQuote();
            setQuote(q);
            setStatus('success');
        } catch(e) {
            setStatus('error');
        }
    };

    useEffect(() => {refresh{}; }, []);
    return {quote, status, refresh}; 
}