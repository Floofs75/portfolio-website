import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import React from 'react';

function App() {
  return (
    <div className="App">

        <Navbar/>

      <main>

        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        
      </main>
      
    </div>
  );
}

export default App;
