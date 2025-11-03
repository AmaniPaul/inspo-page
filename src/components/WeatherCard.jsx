function WeatherIcon({ icon, description }) {
    if (!icon) return null;
    const src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <img
            src={src}
            alt={description || 'Weather icon'}
            width={72}
            height={72}
            loading="lazy"
            onError={(e) => {
                // Hide the broken image instead of showing a broken icon
                e.currentTarget.style.display = 'none';
                // Optionally log to console for debugging
                console.warn('Weather icon failed to load:', src);
            }}
        />
    );
}

export default function WeatherCard({data, status, onUnitsChange, units}) {
    if (status==='loading') {
        return <section className="card">Loading weather...</section>;
    }
    if (status==='error') {
        return <section className="card">Couldn't load weather.</section>;
    }
    if (!data) {
        return <section className="card">No weather data.</section>;
    }
    
    const {location, temp, condition, icon, description} = data;
    const iconUrl = icon ? 'https://openweathermap.org/img/wn/${icon}@2x.png' : '';

    return (
        <section className="card">
            <div className="row" style={{justifyContent: 'space-between'}}>
                <div className="row">
                    <WeatherIcon icon={icon} description={description} />  
                    <div>
                        <h3 style={{margin:0}}>{location}</h3>
                        <div style={{fontSize:28, fontWeight:700}}>{temp}°</div>
                    </div>
                </div>
                <label>
                    Units 
                    <select 
                        value={units}
                        onChange={e => onUnitsChange(e.target.value)} 
                        aria-label="Units" 
                        style={{marginLeft:8}}
                    >
                        <option value="imperial">F°</option>
                        <option value="metric">C°</option>
                    </select>
                </label>
            </div>
        </section>
    );

}