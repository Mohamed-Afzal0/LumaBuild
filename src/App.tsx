import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import GoTop from './components/GoTop'
import { LoadingProvider } from './context/LoadingContext'
import './App.css'

function App() {
  const [initialLoading] = useState(() => {
    // Only show loading screen when the website is opened at the main URL
    const isMainUrl =
      window.location.pathname === '/' ||
      window.location.pathname === '' ||
      window.location.pathname.endsWith('/index.html');
    return isMainUrl;
  });

  const [loading, setLoading] = useState(initialLoading);
  const [isReady, setIsReady] = useState(!initialLoading);

  // Prevent any scrolling while the loading screen is active
  useEffect(() => {
    if (!loading) return;

    // Disable browser automatic scroll restoration so it never loads pre-scrolled
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Lock body and html
    document.body.classList.add('loading-lock');
    document.documentElement.classList.add('loading-lock');

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    const preventScrollKeys = (e: KeyboardEvent) => {
      const scrollKeys = [
        'Space',
        'PageUp',
        'PageDown',
        'End',
        'Home',
        'ArrowLeft',
        'ArrowUp',
        'ArrowRight',
        'ArrowDown',
      ];
      if (scrollKeys.includes(e.code) || scrollKeys.includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKeys, { passive: false });

    // Keep at top
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove('loading-lock');
      document.documentElement.classList.remove('loading-lock');
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKeys);
    };
  }, [loading]);

  const handleLoadingFinish = () => {
    // 1. Loading screen has finished its exit animation and leaves
    setLoading(false);

    // 2. Timer: cleanly waits for the loading screen to leave,
    // then resets scroll to top and triggers entrance animations on the home page
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      setIsReady(true);
    }, 120);

    return () => clearTimeout(timer);
  };

  return (
    <LoadingProvider isLoading={loading} isReady={isReady}>
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      <div 
        className={`app-wrapper ${!isReady ? 'app-wrapper--loading' : 'app-wrapper--ready'}`}
        aria-hidden={loading ? 'true' : undefined}
      >
        <Header />
        <Home />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <GoTop />
      </div>
    </LoadingProvider>
  )
}

export default App
