import React, { useState, useEffect } from 'react'; // 👈 Importamos los hooks
import { Container, Button, Row, Col } from 'react-bootstrap';
import FallingStars from './FallingStars';
import './Hero.css';
import backImage from '../assets/images/back.png';

const Hero = () => {
  // --- LÓGICA DEL RELOJ DIGITAL ---
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Limpieza al desmontar
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };
  // --------------------------------

  return (
    <section className="hero" style={{ backgroundImage: `url(${backImage})` }}>
      <div className="hero-overlay"></div>
      <FallingStars />

      <Container className="position-relative h-100 d-flex align-items-center">
        <Row className="w-100 align-items-center">
          <Col lg={7} md={12} className="hero-content text-start">
            
            {/* RELOJ DIGITAL MÍSTICO */}
            <div className="digital-clock mb-3">
              <span className="clock-dot"></span> 
              TIEMPO PRESENTE: {formatTime(time)}
            </div>

            <h1 className="hero-main-title">
              CLARIDAD INMEDIATA <br />
              PARA TU SITUACIÓN ACTUAL
            </h1>
            
            <p className="hero-description">
              No es una lectura genérica. Es un mensaje directo del <br />
              <strong>Tarot Evolutivo en video</strong>, personalizado para ti.
            </p>
            
            <div className="hero-benefit">
              <span>⚡</span> Recibe tu respuesta en menos de 24 horas.
            </div>

            <div className="hero-cta-wrapper mt-4">
              <Button 
                href="#tarot" 
                className="btn-hero-gold"
              >
                <span className="crystal-ball">🔮</span> RESERVAR MI LECTURA EN VIDEO 
              </Button>
              
              <div className="hero-trust-badges mt-3">
                <span>✓ Pago Seguro</span>
                <span>• Atención Directa</span>
                <span>• 100% Privado</span>
              </div>
            </div>
          </Col>

          <Col lg={5} className="d-none d-lg-block text-center">
            <div className="hero-cards-visual">
              {/* Espacio para visuales adicionales */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;