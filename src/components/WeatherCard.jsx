export default function WeatherCard({data, status, onUnitsChange}) {
    if (status==='loading') {
        return <section className="card">Loading weather...</section>;
    }
    if (status==='error') {
        return <section className="card">Couldn't load weather.</section>;
    }
    if (!data) {
        return <section className="card">No weather data.</section>;
    }
    
    const {location, temp, condition, icon} = data;
    const iconUrl = icon ? 'https://openweathermap.org/img/wn/${icon}@2x.png' : '';

    return (
        <section className="card">
            <div className="row" style={{justifyContent: 'space-between'}}>
                <div className="row"
                    {iconUrl && <img alt={condition} src={iconUrl} width={72} height={72} />}
                    <div>
                        <h3 style={{margin:0}}>{location}</h3>
                        <div style={{fontSize:28, fontWeight:700}}>{temp}°</div>
                    </div>
                </div>
                <labeL>
                    Units 
                    <select onChange={e => onUnitsChange(e.target.value)} aria-label="Units" style={{marginLeft:8}}>
                        <option value="metric">C°</option>
                        <option value="imperial">F°</option>
                    </select>
                </label>
            </div>
        </section>
    )
}
