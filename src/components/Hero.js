import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import FallingStars from './FallingStars'; // Importa el componente de estrellas fugaces
import './Hero.css'; 

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <section className="hero">
      <FallingStars /> {/* Componente de estrellas fugaces */}
      <Container>
        <Row>
          <Col md={8} className="hero-content">
            <h1>Hola, Soy Vladimir</h1>
            <p>
              Soy{' '}
              <span style={{ color: '#39ff14', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Desarrollador Web', 'Diseñador Creativo', 'Coach de vida']}
                  loop={9} 
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <Button variant="light" href="#projects">Ver Proyectos</Button>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center hero-content">
            {/* Puedes agregar algo aquí si lo deseas */}
          </Col>
        </Row>
      </Container>
      <div className="clock">{formattedTime}</div> {/* Reloj digital */}
    </section>
  );
};

export default Hero;
