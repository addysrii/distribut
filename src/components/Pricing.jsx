const plans = [
  {
    tier: '30-Day Pilot',
    price: '₹25K',
    period: 'one-time. see results before committing.',
    desc: 'A low-risk way to see what TDL does. You get a full distribution audit and 30 days of real channel work. No big commitment. Just a honest look at what is possible for your product.',
    features: [
      'Full distribution audit',
      'ICP mapping',
      'Reddit strategy + execution',
      'LinkedIn content strategy',
      'AEO foundation',
      '30-day report',
    ],
    btn: 'Start Pilot →',
    featured: false,
  },
  {
    tier: '3-Month Retainer',
    price: '₹50K+',
    period: 'per month. where distribution compounds.',
    desc: 'The full TDL engagement. We go deep on your channels, your content, your community presence. Month on month, we build something that keeps working even when we are not actively pushing.',
    features: [
      'Everything in Pilot',
      'Daily LinkedIn content',
      'Twitter strategy + content',
      'ProductHunt prep (if applicable)',
      'Community building',
      'Monthly reporting',
      'Dedicated channel management',
    ],
    btn: 'Start Retainer →',
    featured: true,
    badge: 'Most Popular',
  },
  {
    tier: 'Funded Startup',
    price: '$800+',
    period: 'per month USD. built for seed-stage companies.',
    desc: 'You raised money and now you need to show growth. This tier is built for funded founders with a real timeline and real pressure. We move faster and go harder.',
    features: [
      'Everything in Retainer',
      'Investor-framed reporting',
      'High-volume content production',
      'AEO full implementation',
      'Priority response',
      'Growth milestone tracking',
    ],
    btn: "Let's Talk →",
    featured: false,
  },
]

const Pricing = () => (
  <section className="pricing" id="pricing">
    <div className="pricing__inner">
        <div className="label">Pricing</div>
        <h2 className="pricing__h2">
          Priced for real
          <em>outcomes, not retainers.</em>
        </h2>
        <p className="pricing__sub">
          Every engagement starts with a 30-day pilot. Low commitment, real work, honest results.
          See what we can do before deciding anything.
        </p>

      <div className="pricing__cards">
        {plans.map((plan, i) => (
          <div className={`p-card ${plan.featured ? 'p-card--featured' : ''}`} key={i}>
            {plan.badge && <span className="p-card__badge">{plan.badge}</span>}
            <p className="p-card__tier">{plan.tier}</p>
            <p className="p-card__price">{plan.price}</p>
            <p className="p-card__period">{plan.period}</p>
            <p className="p-card__desc">{plan.desc}</p>
            <ul className="p-card__features">
              {plan.features.map((f, j) => (
                <li className="p-card__feature" key={j}>
                  <span className="p-card__check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            {plan.featured && <div className="p-card__divider" />}
            <a href="#contact" className={`p-card__btn ${plan.featured ? 'p-card__btn--white' : 'p-card__btn--dark'}`}>{plan.btn}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Pricing
