import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
// import Contact from './components/Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="hero"><Hero /></Element>
      <Element name="about"><About /></Element>
      {/*<Element name="experience"><Experience /></Element>
      <Element name="contact"><Contact /></Element> */}
    </div>
  );
}

export default App;
