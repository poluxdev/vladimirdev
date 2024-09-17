import React from 'react';
import './App.css'; // Importa el archivo App.css
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About'; // Importa correctamente el componente About
import Contact from './components/Contact';
import Footer from './components/Footer';

const projects = [
  // Añade más proyectos aquí
];

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero projects={projects} /> {/* Pasar los proyectos como prop */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
