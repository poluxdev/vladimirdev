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
        <Row>
          <Col md={8} className="hero-content">
            <h1>Polux</h1>
            <p>
              Soy{' '}
              <span style={{ color: '#39ff14', fontWeight: 'bold' }}>
                <Typewriter
                  words={[
                    'Tarotista',
                    'Psicólogo ',
                    'Numerólogo ',
                    'Astrólogo ',
                    'Creador Digital'
                  ]}
                  loop={9}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            
            <div className="hero-buttons">
              {/* BOTÓN SECUNDARIO: EXPLORAR */}
              <Button 
                href="#projects" 
                className="btn-hero-explore me-3"
              >
                Explora Tu Mundo Interior
              </Button>

              {/* BOTÓN PRIMARIO: TAROT (VENTA) */}
              <Button 
                href="#tarot" 
                className="btn-hero-tarot"
              >
                🔮 Lectura Personalizada
              </Button>
            </div>
          </Col>

          <Col md={4} className="d-flex justify-content-center align-items-center hero-extra">
            {/* Aquí puedes insertar tu logo o una ilustración mística */}
          </Col>
        </Row>
      </Container>

      <div className="clock">{formattedTime}</div>
    </section>
  );
};

export default Hero;