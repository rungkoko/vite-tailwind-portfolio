import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import './App.css';

function App() {
  const [language, setLanguage] = useState('th'); // Default to Thai

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
