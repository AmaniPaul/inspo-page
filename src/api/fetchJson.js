//utility module that's a safe and clean wrapper around the browser's bulit-in fetch()
export async function fetchJson(url, options = {}) {
    const res = await  fetch(url, {
        ...options,
        headers: { 'Accept': 'applicaiton/json', ...(options.headers || {})}
    });

    if(!res.ok) {
        throw new Error('HTTP ${res.status} - ${res.statusText}');
    }
    //so fetcch() API doesn't throw on HTTP errors but bad status code
    return res.json();
}

// this makes service modules simpler and less error-prone
