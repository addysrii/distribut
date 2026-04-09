import { useState } from 'react'

const socials = [
  { name: 'LinkedIn', handle: '@thedistributionlab', abbr: 'in', href: '#' },
  { name: 'Twitter / X', handle: '@thedistributionlab', abbr: 'X', href: '#' },
  { name: 'Instagram', handle: '@thedistributionlab', abbr: 'ig', href: '#' },
]

// ─────────────────────────────────────────────────────────────
// GOOGLE FORMS CONFIGURATION
// 1. Go to your Google Form → ⋮ → "Get pre-filled link"
// 2. Fill dummy text in each field → "Get Link"
// 3. Copy the FORM_ID and each entry.XXXXXXXXX from the URL
// ─────────────────────────────────────────────────────────────
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'

const ENTRY_IDS = {
  name:    'entry.XXXXXXXXX',   // ← replace with your entry ID for "Name"
  product: 'entry.XXXXXXXXX',   // ← replace with your entry ID for "Product"
  users:   'entry.XXXXXXXXX',   // ← replace with your entry ID for "User Count"
  tried:   'entry.XXXXXXXXX',   // ← replace with your entry ID for "What Have You Tried"
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', product: '', users: '', tried: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const body = new FormData()
    body.append(ENTRY_IDS.name,    form.name)
    body.append(ENTRY_IDS.product, form.product)
    body.append(ENTRY_IDS.users,   form.users)
    body.append(ENTRY_IDS.tried,   form.tried)

    try {
      // Google Forms doesn't support CORS, so we use no-cors.
      // The fetch will always "succeed" from our side — responses go to your Google Sheet.
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      setStatus('success')
      setForm({ name: '', product: '', users: '', tried: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        {/* Left */}
        <div className="contact-left">
          <p className="contact-left-label">Get Started</p>
          <h2 className="contact-heading">
            Let's build your
            <span className="italic-line">distribution engine.</span>
          </h2>
          <p className="contact-subtext">
            Tell us about your product and where you are right now. We will
            review it and get back to you within 24 hours with honest thoughts
            on what distribution looks like for you.
          </p>

          <div className="contact-meta">
            <p className="contact-meta-label">Response Time</p>
            <p className="contact-meta-value">Within 24 hours. Always.</p>
          </div>

          <p className="find-us-label">Find Us Online</p>
          <div className="social-links">
            {socials.map((s, i) => (
              <a className="social-link" href={s.href} key={i}>
                <div className="social-link-left">
                  <div className="social-icon-box">{s.abbr}</div>
                  <div>
                    <span className="social-name">{s.name}</span>
                    <span className="social-handle">{s.handle}</span>
                  </div>
                </div>
                <span className="social-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                className="form-input"
                type="text"
                placeholder="Who are you?"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="product">Your Product</label>
              <input
                id="product"
                name="product"
                className="form-input"
                type="text"
                placeholder="What are you building?"
                value={form.product}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="users">Current User Count</label>
              <input
                id="users"
                name="users"
                className="form-input"
                type="text"
                placeholder="How many users do you have right now?"
                value={form.users}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="tried">What Have You Tried?</label>
              <textarea
                id="tried"
                name="tried"
                className="form-textarea"
                placeholder="What distribution channels have you attempted? What happened?"
                value={form.tried}
                onChange={handleChange}
                rows={4}
              />
            </div>
            {status === 'success' ? (
              <div style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '5px',
                padding: '1rem',
                textAlign: 'center',
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}>
                ✓ Sent! We'll be in touch within 24 hours.
              </div>
            ) : (
              <button
                type="submit"
                className="form-submit"
                disabled={status === 'loading'}
                style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'loading' ? 'Sending...' : "Send. Let's Talk. →"}
              </button>
            )}
            {status === 'error' && (
              <p style={{ color: '#ffaaaa', fontSize: '0.78rem', marginTop: '0.5rem', textAlign: 'center' }}>
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
