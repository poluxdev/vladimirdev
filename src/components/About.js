import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center">Sobre Mí</h2>
        <p>
          Hola, soy Vladimir García. Soy un coach de vida apasionado por ayudar a las personas a comprenderse mejor a través de herramientas como la numerología, el tarot y la astrología. Mi enfoque único combina técnicas tradicionales con un entendimiento profundo de la psicología para proporcionar orientación y apoyo personalizado.
        </p>
        <p>
          Además, soy un desarrollador web full stack con experiencia en la creación de aplicaciones web completas, desde el diseño de interfaces intuitivas hasta la implementación de soluciones backend robustas. Mi enfoque autodidacta me ha permitido adaptarme y aprender continuamente sobre las últimas tecnologías y mejores prácticas en el desarrollo web.
        </p>
        <p>
          Con una sólida formación en psicología y una pasión por el aprendizaje continuo, me dedico a fusionar mi conocimiento en estas áreas para ofrecer soluciones innovadoras y efectivas. En este portafolio, podrás explorar algunos de mis proyectos más destacados y ver cómo mi combinación de habilidades técnicas y conocimientos en coaching puede ofrecer valor único.
        </p>
      </Container>
    </section>
  );
};

export default About;
