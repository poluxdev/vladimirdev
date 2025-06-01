import React from 'react';
import { Container } from 'react-bootstrap';
import certificado from '../images/certificado.jpg'; // Asegúrate que la ruta sea correcta
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center">Sobre Mí</h2>
        <p>
          Hola, soy Vladimir García. Me muevo en la intersección entre el pensamiento simbólico y lo técnico: exploro el tarot, la numerología y la astrología con una mirada psicológica, profunda y no dogmática. No busco dar respuestas cerradas, sino abrir preguntas que inviten a mirarte distinto.
        </p>
        <p>
          También soy <span className="certificado-hover">desarrollador web full stack
            <img src={certificado} alt="Certificado de Desarrollador Web" className="certificado-img" />
          </span>, con experiencia en crear soluciones digitales desde cero: diseño, funcionalidad y estructura backend. Aprendí de forma autodidacta, combinando curiosidad, lógica y constancia para mantenerme actualizado con las últimas tecnologías.
        </p>
        <p>
          Mi formación en psicología y mi enfoque transversal me permiten conectar patrones entre lo interno y lo externo, lo simbólico y lo práctico. En este espacio comparto proyectos, ideas y reflexiones que muestran cómo se puede integrar lo espiritual, lo técnico y lo humano sin perder autenticidad.
        </p>
      </Container>
    </section>
  );
};

export default About;
