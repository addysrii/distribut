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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="nav-logo">
          The Distribution <span className="logo-italic">Lab</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
          <li><a href="#process" onClick={e => { e.preventDefault(); scrollTo('process') }}>How It Works</a></li>
          <li><a href="#pricing" onClick={e => { e.preventDefault(); scrollTo('pricing') }}>Pricing</a></li>
          <li><a href="#faq" onClick={e => { e.preventDefault(); scrollTo('faq') }}>FAQ</a></li>
        </ul>
        <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }} className="nav-cta">
          Work With Us
        </a>
      </div>
    </nav>
  )
}

export default Navbar
