import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar toggleDark={toggleDark} darkMode={darkMode} />
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;