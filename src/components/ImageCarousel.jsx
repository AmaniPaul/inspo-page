export default function ImageCarousel({ current, status, onPrev, onNext, error }) {
    return (
      <section className="card full">
        {status === 'loading' && <div>Fetching images…</div>}
        {status === 'error' && (
          <div>
            Couldn’t fetch images.
            {error ? <div className="small">({String(error.message)})</div> : null}
          </div>
        )}
        {current && (
          <figure className="carousel">
            <img src={current.url} alt={current.alt} />
            <figcaption className="small" style={{ position: 'absolute', right: 10, bottom: 8, background: 'rgba(0,0,0,0.5)', padding: '4px 6px', borderRadius: 8 }}>
              {current.credit}
            </figcaption>
            <div className="nav">
              <button className="iconBtn" onClick={onPrev} aria-label="Previous">‹</button>
              <button className="iconBtn" onClick={onNext} aria-label="Next">›</button>
            </div>
          </figure>
        )}
      </section>
    );
  }
  