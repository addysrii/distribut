const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left">
          <span className="hero-badge">SaaS Distribution Agency</span>
          <h1 className="hero-heading">
            Your product is ready.
            <span className="italic-line">Nobody knows it exists.</span>
          </h1>
          <p className="hero-subtext">
            You built something real. Now you need people to find it.
            TDL gets your SaaS in front of the right people using organic
            content on Reddit, LinkedIn, and Twitter. No ads. No shortcuts.
            Just consistent distribution that compounds.
          </p>
          <div className="hero-actions">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('contact') }}
              className="btn-primary"
            >
              Book a Free Audit →
            </a>
            <a
              href="#process"
              onClick={e => { e.preventDefault(); scrollTo('process') }}
              className="btn-ghost"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Right — Card */}
        <div className="hero-card">
          <p className="hero-card-label">What TDL Delivers</p>
          <div className="hero-card-day">Day 1</div>
          <p className="hero-card-subtitle">
            We start building your distribution from scratch. Reddit, LinkedIn, Twitter.
            The right channels for your exact product and customer.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">3</span>
              <span className="hero-stat-label">core channels</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">0</span>
              <span className="hero-stat-label">ad spend needed</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">30</span>
              <span className="hero-stat-label">day pilot first</span>
            </div>
          </div>
          <p className="hero-card-quote">"code for passion. distribute for profit."</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
