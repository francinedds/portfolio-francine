import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState('light');

  const sections = [
    <About key="About" />,
    <Projects key="Projects" theme={theme} />,
    <Contact key="Contact" theme={theme} />,
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="app">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={setIndex}
        currentIndex={index}
      />

      <main className="slider relative">
        <AnimatePresence mode="wait">{sections[index]}</AnimatePresence>

        <div className="nav-arrows absolute bottom-4 right-4 flex gap-2 pointer-events-none">
          {index > 0 && (
            <button
              className="arrow-button pointer-events-auto"
              onClick={() => setIndex(index - 1)}
            >
              <ArrowLeftIcon size={20} />
            </button>
          )}
          {index < sections.length - 1 && (
            <button
              className="arrow-button pointer-events-auto"
              onClick={() => setIndex(index + 1)}
            >
              <ArrowRightIcon size={20} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
