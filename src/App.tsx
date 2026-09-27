import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(() => {
    // Only show loading screen when the website is opened at the main URL
    const isMainUrl =
      window.location.pathname === '/' ||
      window.location.pathname === '' ||
      window.location.pathname.endsWith('/index.html');
    return isMainUrl;
  });

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
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

