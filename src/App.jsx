import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection/>
        <About/>
        <Skills/>
      </main>
    </>
  )
}

export default App
