import {fetchJson} from './fetchJson.js';
const KEY = import.meta.env.VITE_IMAGES_API_KEY;

export async function getInspirationaalImages(topic='inspiration', perPage=10) {
    const url = 'https://api.unsplash.com/search/photos?query=${encodeURIComponent(topic)}&per_page=${perPage}';
    const data = await fetchJson(url, {headers: { Authorization: 'Client-ID ${KEY}' } });

    return (data.results || []).map(r => ({
        id: r.id,
        url: r.urls?.regular,
        alt: r.alt_description || 'Inspirational image',
        credit: r.user?.name || 'Unknown',
        link: r.links?.html
    }));
}

