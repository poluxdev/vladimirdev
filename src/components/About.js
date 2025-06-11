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
          Desde niño, la curiosidad fue mi lenguaje más natural. Como todo niño, hacía preguntas sin límite, pero con el tiempo aprendí a no apagar esa chispa. Mientras muchos dejaban de explorar, yo seguí haciéndolo: armaba, desarmaba, probaba, leía, observaba. No porque alguien me dijera que debía hacerlo, sino porque algo en mí quería entender cómo funcionaban las cosas… y también por qué nos sentimos como nos sentimos.
        </p>

        <p>
          Aprendí de forma autodidacta, primero por intuición y luego con intención. Gracias a esa curiosidad sostenida, descubrí que la vida se puede comprender desde muchos ángulos: desde el código que ordena lo digital, hasta los símbolos que revelan lo interno. Hoy veo con claridad algo que de niño solo sentía: que lo técnico y lo simbólico no están en guerra, sino que se pueden encontrar.
        </p>

        <p>
          Hola, soy Vladimir García. Me muevo en la intersección entre lo simbólico y lo técnico. Exploro el tarot, la numerología y la astrología desde una mirada psicológica, profunda y no dogmática, inspirada en el enfoque humanista y existencial. No busco ofrecer respuestas cerradas, sino abrir preguntas que inviten al autoconocimiento y a una forma más consciente de habitarse.
        </p>

        <p>
          También soy{' '}
          <span className="certificado-hover">
            desarrollador web full stack
            <img src={certificado} alt="Certificado de Desarrollador Web" className="certificado-img" />
          </span>, con experiencia en crear soluciones digitales desde cero: diseño visual, funcionalidad y estructura backend. Aprendí combinando lógica y sensibilidad, manteniéndome en constante actualización con las tecnologías actuales.
        </p>

        <p>
          Mi formación en psicología humanista y mi enfoque transversal me permiten conectar patrones entre lo interno y lo externo, lo simbólico y lo práctico. En este espacio comparto proyectos, ideas y herramientas que integran lo espiritual, lo técnico y lo humano con autenticidad y propósito.
        </p>

        <p>
          Creo que la tecnología no solo puede resolver problemas, sino también hacernos preguntas. Me interesa crear espacios digitales que no solo funcionen bien, sino que despierten algo: una emoción, una idea, una intuición.
        </p>

        <p>
          Cada proyecto que encontrarás aquí nace de esa mezcla: lo técnico al servicio de lo simbólico, lo funcional como forma de lo significativo.
        </p>

        <p>
          No hay explicación completa, solo caminos para explorar.
        </p>

        <p>
          Si algo de lo que ves te interpela, quizás ya estamos en conversación.
        </p>
      </Container>
    </section>
  );
};

export default About;
