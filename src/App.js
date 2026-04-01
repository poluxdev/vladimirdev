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
  // Tus proyectos actuales se pasan aquí
];

const App = () => {
  // Inicialización de Google Analytics (Asegúrate de tener tu ID configurado en el index o aquí)
  // ReactGA.initialize("TU_ID_AQUÍ");

  const handleWhatsappClick = () => {
    ReactGA.event({
      category: 'Conversión',
      action: 'Click WhatsApp Flotante',
      label: 'Embudo TikTok', 
    });
  };

  return (
    <div className="app-container">
      {/* Navegación Fija */}
      <NavBar />

      {/* 1. EL GANCHO: Hero con el Headline de impacto que configuramos */}
      <Hero projects={projects} />

      {/* 2. EL PRODUCTO: Lo movemos aquí para que sea lo primero que vean al hacer scroll */}
      {/* Es vital que el ID en ConsultasTarot coincida con el href="#tarot" del botón del Hero */}
      <section id="tarot">
        <ConsultasTarot />
      </section>

      {/* 3. LA AUTORIDAD: Ahora que saben qué vendes, les dices quién eres */}
      <section id="about">
        <About />
      </section>

      {/* 4. VALOR AGREGADO: Tus calculadoras y herramientas (Lead Magnets) */}
      <section id="tools">
        <Projects />
      </section>

      {/* 5. CIERRE: Dudas finales y redes sociales */}
      <Contact />
      
      <Footer />

      {/* --- BOTÓN FLOTANTE DE WHATSAPP (Optimizada la visibilidad) --- */}
      <a
        href="https://wa.me/51929441018?"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Consulta disponibilidad por WhatsApp"
        onClick={handleWhatsappClick} 
      >
        <div className="whatsapp-tooltip">¿Consultamos a las cartas? 🔮</div>
        <img src={whatsappIcon} alt="WhatsApp Polux Tarot" />
      </a>
    </div>
  );
};

export default App;