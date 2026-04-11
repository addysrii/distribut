import { useState } from 'react'

const socials = [
  { name: 'LinkedIn', handle: '@thedistributionlab', abbr: 'in', href: 'https://www.linkedin.com/company/111200996/' },
  { name: 'Twitter / X', handle: '@LabDistribution', abbr: 'X', href: 'https://x.com/LabDistribution' },
  { name: 'Instagram', handle: '@thedistributionlab', abbr: 'ig', href: 'https://www.instagram.com/thedistributionlab/' },
  { name: 'Reddit', handle: '@TheDistributionLab', abbr: 'rd', href: 'https://www.reddit.com/user/TheDistributionLab' },
]

// ─────────────────────────────────────────────────────────────
// GOOGLE FORMS CONFIGURATION
// ─────────────────────────────────────────────────────────────
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'

const ENTRY_IDS = {
  name:    'entry.XXXXXXXXX',
  email:   'entry.XXXXXXXXX',
  product: 'entry.XXXXXXXXX',
  users:   'entry.XXXXXXXXX',
  tried:   'entry.XXXXXXXXX',
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', product: '', users: '', tried: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const body = new FormData()
    body.append(ENTRY_IDS.name,    form.name)
    body.append(ENTRY_IDS.email,   form.email)
    body.append(ENTRY_IDS.product, form.product)
    body.append(ENTRY_IDS.users,   form.users)
    body.append(ENTRY_IDS.tried,   form.tried)

    try {
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      setStatus('success')
      setForm({ name: '', email: '', product: '', users: '', tried: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        {/* Left */}
        <div className="contact__left">
          <div className="label label--light">Get Started</div>
          <h2 className="contact__h2">
            Ready to build real
            <em>distribution?</em>
          </h2>
          <p className="contact__sub">
            Tell us about your product and where you are right now. We will
            review it and get back to you within 24 hours with honest thoughts
            on what distribution looks like for you.
          </p>

          <div className="contact__meta">
            <p className="contact__meta-label">Response Time</p>
            <p className="contact__meta-val">Within 24 hours. Always.</p>
          </div>

          <p className="find-label">Find Us Online</p>
          <div className="social-links">
            {socials.map((s, i) => (
              <a className="social-link" href={s.href} key={i} target="_blank" rel="noreferrer">
                <div className="social-link__left">
                  <div className="social-link__icon">{s.abbr}</div>
                  <div>
                    <span className="social-link__name">{s.name}</span>
                    <span className="social-link__handle">{s.handle}</span>
                  </div>
                </div>
                <span className="social-link__arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="cform">
          <form onSubmit={handleSubmit}>
            <div className="cform__group">
              <label className="cform__label" htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                className="cform__input"
                type="text"
                placeholder="Founder name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cform__group">
              <label className="cform__label" htmlFor="email">Work Email</label>
              <input
                id="email"
                name="email"
                className="cform__input"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cform__group">
              <label className="cform__label" htmlFor="product">Your Product</label>
              <input
                id="product"
                name="product"
                className="cform__input"
                type="text"
                placeholder="What are you building?"
                value={form.product}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cform__group">
              <label className="cform__label" htmlFor="users">Current User Count</label>
              <input
                id="users"
                name="users"
                className="cform__input"
                type="text"
                placeholder="How many users do you have right now?"
                value={form.users}
                onChange={handleChange}
              />
            </div>
            <div className="cform__group">
              <label className="cform__label" htmlFor="tried">What Have You Tried?</label>
              <textarea
                id="tried"
                name="tried"
                className="cform__textarea"
                placeholder="What distribution channels have you attempted? What happened?"
                value={form.tried}
                onChange={handleChange}
                rows={4}
              />
            </div>
            {status === 'success' ? (
              <div className="cform__success">
                ✓ Sent! We'll be in touch within 24 hours.
              </div>
            ) : (
              <button
                type="submit"
                className="cform__submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : "Send. Let's Talk. →"}
              </button>
            )}
            {status === 'error' && (
              <p className="cform__error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
