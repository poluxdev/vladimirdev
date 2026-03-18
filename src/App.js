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
      label: 'Ayuda Pago', // Etiqueta actualizada para analíticas
    });
  };

  /** * MENSAJE ACTUALIZADO: 
   * Enfocado en resolver problemas de pago o dudas finales de la guía.
   */
  const whatsappMessage = "¡Hola Polux! 🔮 Estaba viendo la guía en tu página pero tuve un inconveniente con el método de pago. ¿Podrías ayudarme a completar mi lectura por aquí?";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div>
      <NavBar />
      <Hero projects={projects} />
      <About />
      <ConsultasTarot />
      <Projects />
      <Contact />
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href={`https://wa.me/51929441018?text=${encodedMessage}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="¿Problemas con el pago? Escríbeme"
        onClick={handleWhatsappClick} 
      >
        {/* Tooltip con llamado a la acción sobre dudas de pago */}
        <div className="whatsapp-tooltip">¿Dudas con el pago? 📲</div>
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;