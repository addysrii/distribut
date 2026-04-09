import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Problem from './components/Problem'
import Services from './components/Services'
import Process from './components/Process'
import AEO from './components/AEO'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <Services />
        <Process />
        <AEO />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
