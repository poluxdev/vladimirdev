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
import ReactGA from 'react-ga4'; // 👈 Asegúrate de importar esto

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
        href="https://wa.me/51929441018?text=Hola%20👋%20Estoy%20interesado(a)%20en%20una%20lectura%20de%20tarot%20personalizada.%20¿Me%20podrías%20dar%20más%20información?"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="¿Tienes dudas? Escríbeme por WhatsApp"
        onClick={handleWhatsappClick} 
      >
        <div className="whatsapp-tooltip">Escríbeme 📲</div>
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default App;
