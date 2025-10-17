import {fetchJson} from './fetchJson';

export async function getRandomQuote() {
    const data = await fetchJson('https://zenquotes.io/api/quotes');
    const q = data?.[0] || {};
    return {text: q.q || 'Keep going.', author: q.a || 'Unknown'};
}