import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        {/* Usamos un encabezado claro para el SEO */}
        <h2 className="text-center mb-4">Sobre Polux Tarotista</h2>

        <p>
          Hola, soy Vladimir… aunque en el mundo del bienestar y la espiritualidad muchos me conocen como <strong>Polux Tarotista</strong>.
        </p>

        <p>
          No estoy aquí para predecirte un destino fijo o hacer adivinación convencional.  
          Mi forma de trabajar con el <strong>tarot evolutivo</strong> es diferente y enfocada en tu crecimiento personal.
        </p>

        <p>
          Para mí, el tarot es un <strong>espejo de energías</strong>.  
          Una herramienta que refleja lo que estás viviendo, lo que sientes… y lo que necesitas ver con más claridad en tu presente.
        </p>

        <p>
          No se trata de decirte qué va a pasar,  
          sino de ayudarte a <strong>entender qué está pasando realmente</strong> en tu vida para que recuperes el control.
        </p>

        <p>
          Cuando logras ver tu situación con claridad:
          <br />– tomas mejores decisiones  
          <br />– dejas de repetir patrones  
          <br />– y recuperas tu <strong>poder personal</strong>
        </p>

        <p>
          Mi enfoque como <strong>tarotista profesional</strong> combina la simbología del tarot con una mirada psicológica.  
          No solo interpreto las cartas… también te brindo un acompañamiento para comprender el "por qué" detrás de tu situación actual.
        </p>

        <p>
          Yo solo soy un <strong>mensajero</strong>, un intérprete de lo que el universo y tu propia energía quieren mostrarte en este momento.
        </p>

        <hr className="my-5" style={{ opacity: 0.1 }} />

        <p className="fw-bold mt-4">
          🎥 Lecturas de Tarot Personalizadas
        </p>

        <p>
          Si sientes conexión con mi visión terapéutica del tarot, puedes solicitar una consulta privada.
        </p>

        <p>
          📩 <strong>¿Cómo funciona mi servicio?</strong>
          <br />– Me envías tu pregunta o inquietud (puede ser tan compleja como necesites).
          <br />– Realizo tu <strong>lectura de cartas personalizada</strong> de forma profunda.
          <br />– Recibes un <strong>video privado</strong> exclusivo para ti.
        </p>

        <p>
          En ese video:
          <br />– Te muestro el despliegue de las cartas.
          <br />– Te explico el significado de cada una aplicado a tu duda.
          <br />– <strong>Interpreto tu situación</strong> con total honestidad.
          <br />– Y te doy la claridad y el consejo que el tarot revela para ti.
        </p>

        <p className="fw-bold mt-4">
          Si llegaste hasta aquí… no es casualidad.
        </p>
      </Container>
    </section>
  );
};

export default About;