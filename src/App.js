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
        href="https://wa.me/51929441018?text=%C2%A1Hola%20Polux!%20%F0%9F%94%AE%20Ya%20realic%C3%A9%20el%20pago%20de%20mi%20lectura.%20Aqu%C3%AD%20te%20comparto%20mi%20nombre%2C%20mi%20pregunta%20y%20el%20comprobante%20para%20recibir%20mi%20video%20en%20las%20pr%C3%B3ximas%2024%20horas.%20%E2%9C%A8"
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
