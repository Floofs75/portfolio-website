import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import React from 'react';

function App() {
  return (
    <div className="App">

      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
