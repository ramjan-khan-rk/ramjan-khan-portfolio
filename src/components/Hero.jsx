const ticker = [
  "RK Logistics",
  "Quotes and dispatch",
  "Field operations",
  "Full-stack products",
  "Mobile applications",
  "REST APIs",
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Open to developer roles
          </p>

          <h1>
            Ramjan
            <span>Khan</span>
          </h1>

          <p className="hero-role">Full-stack developer and product builder</p>

          <p className="hero-description">
            I build software that has to run a real operation. The current one
            is RK Logistics — clients book cargo, the company quotes and
            dispatches it, and the field app carries the trip.
          </p>

          <div className="hero-buttons">
            <a
              href="https://rk-logistics-hub.onrender.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open RK Logistics
            </a>
            <a href="#projects" className="btn btn-secondary">
              See the work
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="studio">
            <div className="studio-window">
              <div className="studio-top">
                <span />
                <span />
                <span />
                <p>rk logistics / workspace</p>
              </div>
              <div className="studio-layout">
                <ul>
                  <li className="is-on">Quotes</li>
                  <li>Dispatch</li>
                  <li>Fleet</li>
                  <li>Exceptions</li>
                  <li>Field</li>
                </ul>
                <div className="studio-main">
                  <div className="studio-row">
                    <div>
                      <small>Client</small>
                      <strong>Booked</strong>
                    </div>
                    <div>
                      <small>Desk</small>
                      <strong>Assigned</strong>
                    </div>
                    <div>
                      <small>Trip</small>
                      <strong>Live</strong>
                    </div>
                  </div>
                  <div className="studio-list">
                    <p><i /> Quote accepted</p>
                    <p><i /> Fleet matched</p>
                    <p><i /> Field en route</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="phone">
              <p className="phone-kicker">Field</p>
              <h3>Active trip</h3>
              <div className="phone-item">
                <span>Pickup</span>
                <b>Done</b>
              </div>
              <div className="phone-item">
                <span>Corridor</span>
                <b>Moving</b>
              </div>
              <div className="phone-bar">
                <em />
              </div>
              <p className="phone-note">Proof of delivery next</p>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
              {ticker.map((item) => (
                <span key={`${copy}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
