import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <h2 className="section-title text-center mb-5">La Esencia de Polux</h2>

            <div className="about-text">
              <p className="intro-text">
                Hola, soy Vladimir… en este espacio me conoces como <strong>Polux</strong>.
              </p>

              <p>
                No estoy aquí para predecirte un destino fijo. Mi enfoque con el <strong>Tarot Evolutivo</strong> 
                se aleja de la adivinación convencional para centrarse en tu despertar y claridad presente.
              </p>

              <blockquote className="mistic-quote">
                "El Tarot es un espejo de energías: refleja lo que vibras hoy para que decidas tu mañana."
              </blockquote>

              <p>
                Mi labor es ayudarte a <strong>recuperar el mando de tu vida</strong>. No te diré qué va a pasar, 
                sino qué está ocurriendo en tu energía para que dejes de repetir patrones y recuperes tu poder personal.
              </p>

              <div className="process-box my-5">
                <h3 className="process-title">🎥 El Mensaje en Video</h3>
                <p>
                  Si conectas con esta visión, realizo para ti una <strong>lectura personalizada en video</strong>. 
                  Un formato íntimo y profundo donde:
                </p>
                <ul className="process-list">
                  <li>Sintonizo con tu pregunta concreta de forma privada.</li>
                  <li>Muestro el despliegue de las cartas y su simbología aplicada a ti.</li>
                  <li>Recibes el enlace de tu video en <strong>menos de 24 horas</strong>.</li>
                </ul>
              </div>

              <p className="final-reflection text-center mt-5">
                Soy simplemente un intérprete de lo que el universo quiere mostrarte. 
                <strong> Si estás aquí, ya comenzaste a buscar tu propia claridad.</strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;