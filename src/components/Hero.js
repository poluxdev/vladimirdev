import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import FallingStars from './FallingStars';
import './Hero.css';
import backImage from '../assets/images/back.png';

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backImage})` }}
      aria-label="Sección principal de bienvenida"
    >
      <div className="hero-overlay"></div>
      <FallingStars />

      <Container>
        <Row className="align-items-center">
          <Col md={8} className="hero-content">
            <h1 className="hero-title">Polux</h1>
            <p className="hero-subtitle">
              Soy{' '}
              <span className="typewriter-text">
                <Typewriter
                  words={[
                    'Tarotista',
                    'Astrólogo',
                    'Numerólogo',
                    'Creador Digital'
                  ]}
                  loop={0} // 0 para que sea infinito
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2500} // Más tiempo para que lean "Tarotista"
                />
              </span>
            </p>
            
            <div className="hero-buttons">
              {/* BOTÓN SECUNDARIO: EXPLORAR (MUNDO INTERIOR) */}
              <Button 
                href="#projects" 
                className="btn-hero-explore me-3"
              >
                Explora Tu Mundo Interior
              </Button>

              {/* BOTÓN PRIMARIO: TAROT (FORMATO CLARO) */}
              <Button 
                href="#tarot" 
                className="btn-hero-tarot"
              >
                🔮 Recibe tu Lectura en Video
              </Button>
            </div>
          </Col>

          <Col md={4} className="hero-extra text-center">
             {/* Este espacio queda libre para el mazo de cartas que se ve en la imagen */}
          </Col>
        </Row>
      </Container>

      <div className="clock-display">{formattedTime}</div>
    </section>
  );
};

export default Hero;