import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/loadingScreen'
import { Navbar } from './components/navbar';
import { MobileMenu } from './components/mobileMenu';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';

function App() {
  
  const [hasLoaded, setHasLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    {!hasLoaded && <LoadingScreen onComplete={() => setHasLoaded(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${hasLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />
      <MobileMenu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />

      <Home />
      <About /> 
      <Projects />
    </div>
    </>
  )
}

export default App
