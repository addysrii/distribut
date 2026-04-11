const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__body">
        {/* Left */}
        <div className="hero__left">
          <span className="hero__badge">SaaS Distribution Agency</span>
          <h1 className="hero__h1">
            Your product is ready.
            <em>Nobody knows it exists.</em>
          </h1>
          <p className="hero__sub">
            You built something real. Now you need people to find it.
            TDL gets your SaaS in front of the right people using organic
            content on Reddit, LinkedIn, and Twitter. No ads. No shortcuts.
            Just consistent distribution that compounds.
          </p>
          <div className="hero__actions">
            <button onClick={() => scrollTo('contact')} className="btn-green">
              Book a Free Audit →
            </button>
            <button onClick={() => scrollTo('process')} className="btn-outline">
              See How It Works
            </button>
          </div>
        </div>

        {/* Right — Card */}
        <div className="hero__card">
          <p className="hero__card-eyebrow">What TDL Delivers</p>
          <div className="hero__card-day">Day 1</div>
          <p className="hero__card-sub">
            We start building your distribution from scratch. Reddit, LinkedIn, Twitter.
            The right channels for your exact product and customer.
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-val">3</span>
              <span className="hero__stat-lbl">core channels</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val">0</span>
              <span className="hero__stat-lbl">ad spend needed</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-val">30</span>
              <span className="hero__stat-lbl">day pilot first</span>
            </div>
          </div>
          <p className="hero__card-quote">"code for passion. distribute for profit."</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
