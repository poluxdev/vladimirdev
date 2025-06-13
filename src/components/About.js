import React from 'react';
import { Container } from 'react-bootstrap';
import certificado from '../images/certificado.jpg'; // Asegúrate de que la ruta sea correcta
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center">Sobre Mí</h2>

        <p>
          ¿Te sentís atrapado entre lo que sos y lo que podrías llegar a ser? ¿Intuís que hay respuestas dentro de vos, pero no sabés por dónde empezar a buscarlas?
        </p>

        <p>
          Soy Vladimir García, y acompaño a personas en procesos de transformación personal. Utilizo el tarot, la numerología y la astrología desde una mirada psicológica y sin dogmas, para ayudarte a ver lo que no estás viendo y tomar decisiones con más claridad y sentido.
        </p>

        <p>
          Pero también creo que el cambio necesita estructura. Por eso, como{' '}
          <span className="certificado-hover">
            desarrollador web full stack
            <img src={certificado} alt="Certificado de Desarrollador Web" className="certificado-img" />
          </span>, creo espacios digitales que integran lo espiritual y lo técnico. Cada herramienta que diseño busca no solo funcionar, sino también tocar algo interno: una emoción, una intuición, una idea.
        </p>

        <p>
          No ofrezco respuestas mágicas. Ofrezco caminos para explorar, con profundidad, lógica y corazón. Mis proyectos nacen desde ese lugar: unir lo simbólico con lo práctico, lo invisible con lo tangible.
        </p>

        <p className="fw-bold">
          Si estás buscando una guía distinta —honesta, humana y despierta— te invito a explorar los proyectos que encontrarás en este espacio. Cada uno está diseñado para ayudarte a conocerte mejor y activar tu poder personal desde el autoconocimiento.
        </p>
      </Container>
    </section>
  );
};

export default About;
