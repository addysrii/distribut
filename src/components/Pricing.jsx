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
    divider: false,
    btn: 'Start Pilot →',
    btnClass: 'pricing-btn-primary',
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
    divider: true,
    btn: 'Start Retainer →',
    btnClass: 'pricing-btn-white',
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
    divider: false,
    btn: "Let's Talk →",
    btnClass: 'pricing-btn-primary',
    featured: false,
  },
]

const Pricing = () => (
  <section className="pricing-section" id="pricing">
    <div className="pricing-inner">
      <div className="pricing-header">
        <div className="section-label">Pricing</div>
        <h2 className="pricing-heading">
          Priced for real
          <span className="italic-line">outcomes, not retainers.</span>
        </h2>
        <p className="pricing-subtext">
          Every engagement starts with a 30-day pilot. Low commitment, real work, honest results.
          See what we can do before deciding anything.
        </p>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, i) => (
          <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={i}>
            {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
            <p className="pricing-tier">{plan.tier}</p>
            <p className="pricing-price">{plan.price}</p>
            <p className="pricing-period">{plan.period}</p>
            <p className="pricing-desc">{plan.desc}</p>
            <ul className="pricing-features">
              {plan.features.map((f, j) => (
                <li className="pricing-feature" key={j}>
                  <span className="pricing-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            {plan.divider && <div className="pricing-divider" />}
            <a href="#contact" className={`pricing-btn ${plan.btnClass}`}>{plan.btn}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Pricing
