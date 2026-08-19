import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection/>
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
