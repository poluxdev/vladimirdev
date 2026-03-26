import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultasTarot from './components/ConsultasTarot';
import whatsappIcon from './images/whatsap.png';
import ReactGA from 'react-ga4';

const projects = [
  // Añade más proyectos aquí
];

const App = () => {
  const handleWhatsappClick = () => {
    ReactGA.event({
      category: 'Botón WhatsApp',
      action: 'Click en botón flotante de WhatsApp',
      label: 'Contacto Directo', // Etiqueta actualizada para reflejar la apertura
    });
  };

  return (
    <div>
      <NavBar />
      <Hero projects={projects} />
      <About />
      <ConsultasTarot />
      <Projects />
      <Contact />
      <Footer />

      {/* Botón flotante de WhatsApp - Versión Libertad Total */}
      <a
        href="https://wa.me/51929441018"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat directo con Polux"
        onClick={handleWhatsappClick} 
      >
        {/* Tooltip actualizado para mayor libertad y conexión */}
        <div className="whatsapp-tooltip">¿Conversamos? 🔮</div>
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;