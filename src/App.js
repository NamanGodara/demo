import React from 'react';
import Header from './components/header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
