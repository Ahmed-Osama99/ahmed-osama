import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection/>
        <Skills/>
      </main>
    </>
  )
}

export default App
