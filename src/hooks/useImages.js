import {useEffect, useState} from 'react';
import {getInspirationalImages} from '../api/images.js';

export function useImages(topic='inspiration') {
    const [images, setImages] = useState([]);
    const [status, setStatus] = useState('idle');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let canceled = false;
        async function run() {
            setStatus('loading');
            try {
                const rows = await getInspirationalImages(topic, 12);
                if (!canceled) {
                    setImages(rows); 
                    setIndex(0);
                    setStatus('success');
                } 
            } catch (e) {
                    if (!canceled) {
                        setStatus('error');
                    }
                }
        }
        run();
        return () => {
            canceled = true;
        }
    }, [topic]);

    const next = () => setIndex(i => (images.length ? (i + 1) % images.length : 0));
    const prev = () => setIndex(i => (images.length ? (i - 1 + images.length) % images.length : 0));

    return { images, current: images[index] || null, index, next, prev, status};
}