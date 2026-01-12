import Navigation from './components/Navigation'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <MenuSection />
      <Gallery />
      <Booking />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App