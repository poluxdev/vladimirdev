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
          ¿Sientes que estás atrapado entre lo que eres y lo que podrías llegar a ser? ¿Intuyes que hay respuestas dentro de ti, pero no sabes por dónde empezar a buscarlas?
        </p>

        <p>
          Soy Vladimir, pero también puedes llamarme Polux. Elegí ese nombre sin ser del todo consciente en su momento, pero más adelante, al profundizar en el psicoanálisis y en mi proceso de autoconocimiento, entendí que no fue una casualidad: era un llamado de mi alma.
        </p>

        <p>
          Descubrí que tanto el nombre Vladimir como Polux tienen una vibración numerológica en común: el número 7. Este número, asociado con la introspección, la sabiduría y la búsqueda espiritual, resonó profundamente conmigo. No solo porque refleja mi camino interior, sino también porque representa la manera en que abordo la vida: buscando sentido más allá de lo evidente.
        </p>

        <p>
          Además, mi signo solar es Géminis, regido por la historia mitológica de los gemelos Cástor y Pólux. Esta dualidad simbólica —dos naturalezas que conviven: lo terrenal y lo divino, lo racional y lo intuitivo— me ayudó a comprender por qué había elegido, casi sin saberlo, ese nombre. Polux representa esa parte mía que conecta con lo espiritual, lo simbólico y lo invisible, en diálogo con mi lado más humano y lógico.
        </p>

        <p>
          Esa integración entre lo racional y lo simbólico es la base de todo lo que hago. Acompaño a personas que están atravesando procesos de transformación interna, que sienten el llamado a reconectarse con su propósito o a conocerse más profundamente.
        </p>

        <p>
          Trabajo con herramientas como el tarot, la numerología y la astrología, pero siempre desde una mirada psicológica, simbólica y libre de dogmas. No se trata de predecir el futuro, sino de iluminar lo que está oculto, abrir caminos de conciencia y ayudarte a tomar decisiones con mayor claridad, sentido y poder personal.
        </p>

        <p>
          Al mismo tiempo, creo que el cambio profundo necesita estructura. Por eso, como{' '}
          <span className="certificado-hover">
            desarrollador web full stack
            <img src={certificado} alt="Certificado de Desarrollador Web" className="certificado-img" />
          </span>, diseño espacios digitales donde lo espiritual y lo técnico se encuentran. Cada herramienta que creo —ya sea una página, una app o un recurso digital— está pensada para funcionar con lógica, pero también para resonar con algo más profundo: una emoción, una intuición, una idea que despierte algo en tu interior.
        </p>

        <p>
          No ofrezco respuestas mágicas. Lo que ofrezco son caminos. Caminos para explorar con profundidad, con lógica y con corazón. Mis proyectos nacen desde ese lugar donde lo simbólico se encuentra con lo práctico, y lo invisible se vuelve tangible.
        </p>

        <p className="fw-bold">
          Si estás buscando una guía distinta —honesta, humana y consciente—, te invito a explorar los proyectos que encontrarás en este espacio. Cada uno está diseñado para ayudarte a conocerte mejor y activar tu poder personal desde el autoconocimiento.
        </p>

        <p className="fw-bold">
          Si sientes el llamado a entenderte más profundamente, puedes escribirme para trabajar juntos tu carta natal, un estudio numerológico o una lectura de tarot con enfoque psicológico y simbólico. No doy certezas absolutas, sino acompañamiento claro y honesto, para que conectes con tu verdad interna.
        </p>

        <p className="fw-bold">
          Trabajo desde la astrología humanista, la numerología evolutiva y el tarot como espejo del alma. Si quieres comenzar un proceso de transformación, o simplemente explorar quién eres más allá de lo obvio, será un gusto acompañarte.
        </p>
      </Container>
    </section>
  );
};

export default About;
