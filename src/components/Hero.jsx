
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Ramjan <span>Khan</span>
        </h1>

        <h2>Full-Stack Developer & Product Builder</h2>

        <p className="hero-description">
          I build real-world digital products from idea to deployment.
          I work across frontend, backend, mobile, databases, APIs,
          and the systems that connect them together.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-meta">
          <span>FULL-STACK DEVELOPMENT</span>
          <span>•</span>
          <span>MOBILE APPLICATIONS</span>
          <span>•</span>
          <span>PRODUCT BUILDING</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="hero-card-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="hero-code">
            <p>
              <span>const</span> developer = {"{"}
            </p>

            <p className="indent">
              name: <span>"Ramjan Khan"</span>,
            </p>

            <p className="indent">
              role: <span>"Full-Stack Developer"</span>,
            </p>

            <p className="indent">
              building: <span>"Real-World Products"</span>,
            </p>

            <p className="indent">
              projects: <span>["DominR", "GreenifyX"]</span>
            </p>

            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;