export default function QuoteCard({quote, status, onRefresh}) {
    return (
        <section className="card">
            {status==='loading' && <p>Loading quote...</p>}
            {status==='error' && <p>Couldn't load quote.</p>}
            {quote && (
                <>
                    <p style={{fontSize:18, fontStyle:'italic'}}>"{quote.text}"</p>
                    <p className="small" style={{textAlign: 'right'}}>- {quote.author}</p>
                </>
            )}
            <button onClick={onRefresh} style={{marginTop:8}}>New quote</button>
        </section>
    );
}