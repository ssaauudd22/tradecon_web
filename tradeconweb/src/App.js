
import React, { useState, Suspense, lazy } from 'react';
import './SkipToContent.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const Chatbot = lazy(() => import('./components/Chatbot'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Owners = lazy(() => import('./components/Owners'));
const Tenants = lazy(() => import('./components/Tenants'));
const Listing = lazy(() => import('./components/Listing'));
const ScheduleConsult = lazy(() => import('./components/ScheduleConsult'));
const ResidentialComplex = lazy(() => import('./components/ResidentialComplex'));
const CommercialPlaza = lazy(() => import('./components/CommercialPlaza'));
const LuxuryVilla = lazy(() => import('./components/LuxuryVilla'));

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Partners />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => setDarkMode(!darkMode);

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <Navbar toggleDark={toggleDark} darkMode={darkMode} />
        <ErrorBoundary>
          <main role="main" id="main-content">
            <Suspense fallback={<div style={{padding:'2rem',textAlign:'center'}}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/new-construction/portfolio" element={<Portfolio />} />
                <Route path="/owners" element={<Owners />} />
                <Route path="/tenants" element={<Tenants />} />
                <Route path="/listing" element={<Listing />} />
                <Route path="/schedule-consult" element={<ScheduleConsult />} />
                <Route path="/projects/residential-complex" element={<ResidentialComplex />} />
                <Route path="/projects/commercial-plaza" element={<CommercialPlaza />} />
                <Route path="/projects/luxury-villa" element={<LuxuryVilla />} />
              </Routes>
            </Suspense>
          </main>
        </ErrorBoundary>
        <Footer />
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;