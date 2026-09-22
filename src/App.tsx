import Header from './Components/header.tsx'
import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import Projects from './pages/Projects.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Footer from './Components/footer.tsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App

