import { fetchJson } from './fetchJson.js';

const KEY = import.meta.env.VITE_PEXELS_API_KEY;

export async function getInspirationalImages(topic = 'inspiration', perPage = 30) {
  if (!KEY) throw new Error('Missing VITE_PEXELS_API_KEY in .env');

  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(topic)}&per_page=${perPage}`;

  const data = await fetchJson(url, {
    headers: { Authorization: KEY },
  });

  return (data.photos || []).map((p) => ({
    id: p.id,
    url: p.src?.large || p.src?.medium || p.src?.original,
    alt: p.alt || 'Inspirational image',
    credit: p.photographer || 'Unknown',
    link: p.url,
  }));
}
