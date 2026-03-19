import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center">Sobre Mí</h2>

        <p>
          Hola, soy Vladimir… aunque muchos me conocen como <strong>Polux</strong>.
        </p>

        <p>
          No estoy aquí para predecirte un destino fijo.  
          Mi forma de trabajar con el tarot es diferente.
        </p>

        <p>
          Para mí, el tarot es un <strong>espejo de energías</strong>.  
          Una herramienta que refleja lo que estás viviendo, lo que sientes… y lo que necesitas ver con más claridad.
        </p>

        <p>
          No se trata de decirte qué va a pasar,  
          sino de ayudarte a <strong>entender qué está pasando realmente</strong> en tu vida.
        </p>

        <p>
          Cuando entiendes tu situación con claridad:
          <br />– tomas mejores decisiones  
          <br />– dejas de repetir patrones  
          <br />– y recuperas tu poder personal
        </p>

        <p>
          Mi enfoque combina tarot con una mirada psicológica.  
          No solo interpreto las cartas… también te ayudo a comprender el por qué detrás de lo que estás viviendo.
        </p>

        <p>
          Yo solo soy un <strong>mensajero</strong>, un intérprete de lo que el universo quiere mostrarte en este momento.
        </p>

        <p className="fw-bold mt-4">
          🎥 Lecturas personalizadas
        </p>

        <p>
          Si sientes conexión con mi forma de ver el tarot, puedes solicitar una lectura personalizada.
        </p>

        <p>
          📩 ¿Cómo funciona?
          <br />– Me envías tu pregunta (puede ser compleja)
          <br />– Realizo tu lectura de forma personalizada
          <br />– Recibes un <strong>video privado</strong>
        </p>

        <p>
          En ese video:
          <br />– Te muestro las cartas
          <br />– Te explico cada una
          <br />– Interpreto tu situación
          <br />– Y te doy claridad (y consejo si lo necesitas)
        </p>

        <p className="fw-bold">
          Si llegaste hasta aquí… no es casualidad.
        </p>
      </Container>
    </section>
  );
};

export default About;