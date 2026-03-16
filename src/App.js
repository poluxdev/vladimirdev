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
      label: 'WhatsApp Flotante',
    });
  };

  // Mensaje Opción 3: Híbrido (Dudas + Confirmación de Pago)
  const whatsappMessage = "¡Hola Polux! 🔮 Me interesa una lectura de tarot. ¿Me podrías ayudar con unas dudas o confirmarme la recepción de mi pago si ya lo realicé? ¡Muchas gracias!";
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
        title="¿Tienes dudas o ya pagaste? Escríbeme"
        onClick={handleWhatsappClick} 
      >
        <div className="whatsapp-tooltip">Escríbeme 📲</div>
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;