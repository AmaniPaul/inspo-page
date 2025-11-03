import {fetchJson} from './fetchJson.js';

export async function getRandomQuote() {
    const data = await fetchJson('https://api.realinspire.live/v1/quotes/random');

    const quote = data?.[0] || {};
    return {text: quote.content || 'Keep going.', author: quote.author || 'Unknown'};
}