const services = [
  {
    icon: '🎯',
    title: 'ICP Mapping & Distribution Audit',
    text: 'Before we touch any channel, we figure out who your customer actually is, where they hang out online, what frustrates them, and what they have already tried. Most agencies skip this. We never do.',
    tag: 'WEEK ONE',
  },
  {
    icon: '🔴',
    title: 'Reddit Strategy & Execution',
    text: 'We find the subreddits where your actual customer hangs out, not where founders talk to other founders. We build real credibility there and post in a way that starts conversations instead of getting removed.',
    tag: 'ORGANIC',
  },
  {
    icon: '💼',
    title: 'LinkedIn Content & Community',
    text: 'Consistent, valuable content on LinkedIn that your buyers actually want to read. We build your presence so the right people find you, follow you, and eventually reach out.',
    tag: 'INBOUND',
  },
  {
    icon: '🐦',
    title: 'Twitter/X Positioning',
    text: 'Twitter is where SaaS founders have real conversations. We build your voice there, jump into the right discussions, and create content that compounds over time. Slow burn but warm leads.',
    tag: 'BRAND',
  },
  {
    icon: '🚀',
    title: 'ProductHunt Launch Strategy',
    text: 'A ProductHunt launch without preparation is just a wish. We run the full 30-day pre-launch playbook so when you go live, you already have a crowd waiting to show up for you.',
    tag: 'LAUNCH',
  },
  {
    icon: '🤖',
    title: 'AEO: Answer Engine Optimisation',
    text: 'When someone asks ChatGPT or Perplexity "best tool for X", your product needs to show up. We build the signals that make that happen. Third party mentions, directory listings, and founder authority.',
    tag: 'AEO',
  },
]

const Services = () => (
  <section className="services" id="services">
    <div className="services__inner">
      <div className="services__header">
        <div>
          <div className="label">What We Do</div>
          <h2 className="services__h2">
            Distribution is a system,
            <em>not a single tactic.</em>
          </h2>
        </div>
        <p className="services__desc">
          Reddit, LinkedIn, Twitter. Each one rewards founders who show up consistently and
          actually add value. We do that work for you so you can focus on the product.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <span className="service-card__icon">{service.icon}</span>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__text">{service.text}</p>
            <span className="service-card__tag">{service.tag}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
