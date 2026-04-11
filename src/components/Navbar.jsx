import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          The Distribution <em>Lab</em>
        </a>
        <ul className="nav__links">
          <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
          <li><a href="#process" onClick={e => { e.preventDefault(); scrollTo('process') }}>How It Works</a></li>
          <li><a href="#pricing" onClick={e => { e.preventDefault(); scrollTo('pricing') }}>Pricing</a></li>
          <li><a href="#faq" onClick={e => { e.preventDefault(); scrollTo('faq') }}>FAQ</a></li>
        </ul>
        <button onClick={() => scrollTo('contact')} className="nav__cta">
          Work With Us
        </button>
      </div>
    </nav>
  )
}

export default Navbar
