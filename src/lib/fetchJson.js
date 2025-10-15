export async function fetchJson(url, opts = {}) {
    const res = await  fetch(url, {
        ...opts,
        headers: { 'Accept': 'applicaiton/json', ...(opts.headers || {})}
    });

    if(!res.ok) throw new Error('HTTP ${res.status} - ${res.statusText}');

    return res.json();
}
