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
                Hola, soy Vladimir… en este espacio me conoces como <strong>Polux</strong>, y el universo me conoce como <strong>7</strong>.
              </p>

              <p>
                Aquí puedes explorar <strong>numerología, tarot y astrología</strong>. He diseñado sencillas herramientas que utilizo en mi día a día, 
                como la herramienta Polux: <em>“Vibración de tu nombre”</em> y <em>“El secreto del celular”</em>.
              </p>

              <p>
                El número de celular que me dio el universo para esta etapa de mi vida es <strong>929441018</strong> (sin el código de Perú). 
                Desde aquí, y para todo el mundo, canalizo claridad a través de mi habilidad para 
                <strong> analizar e interpretar símbolos</strong>, como los arcanos mayores y menores del tarot.
              </p>

              <p>
                Aprendí viajando hacia dentro de mí. Explorando cada rincón de mi ser, entendí que mi don es el análisis. 
                Me hice llamar Polux inspirado en su simbolismo y en mi <strong>stellium en Géminis</strong> (los que saben, entienden).
              </p>

              <p>
                No estoy aquí para imponerte ideas. Eso deshonraría mi <strong>Ascendente en Acuario</strong>. 
                Soy un libre pensador, y eso es lo que deseo para ti: <strong>libertad en todos los sentidos</strong>.
              </p>

              <p>
                Si mis herramientas despiertan tu curiosidad y te llevan a un viaje hacia tu interior, 
                entonces este espacio ya cumplió su propósito contigo.
              </p>

              <blockquote className="mistic-quote">
                "El Tarot es un espejo de energías: refleja lo que vibras hoy para que decidas tu mañana."
              </blockquote>

              <p>
                No estoy aquí para predecirte un destino fijo. Mi enfoque con el <strong>Tarot Evolutivo</strong> 
                se centra en tu <strong>claridad presente</strong> y en ayudarte a comprender qué está ocurriendo en tu energía.
              </p>

              <p>
                Mi labor es ayudarte a <strong>recuperar el mando de tu vida</strong>, 
                para que dejes de repetir patrones y vuelvas a tu poder personal.
              </p>

              {/* PROCESO */}
              <div className="process-box my-5">
                <h3 className="process-title">🎥 Lectura Personalizada en Video</h3>
                <p>
                  Si conectas con esta visión, realizo para ti una <strong>lectura personalizada en video</strong>, donde:
                </p>
                <ul className="process-list">
                  <li>Sintonizo con tu pregunta de forma privada.</li>
                  <li>Interpreto las cartas aplicadas directamente a tu situación.</li>
                  <li>Recibes tu video en <strong>menos de 24 horas</strong>.</li>
                </ul>
              </div>

              {/* PREGUNTAS */}
              <div className="questions-box my-5">
                <h3 className="questions-title text-center mb-4">🔮 ¿Te preguntas algo como esto?</h3>
                
                <p><strong>Amor y pareja:</strong></p>
                <ul className="questions-list">
                  <li>¿Mi pareja es realmente para mí?</li>
                  <li>¿Mi ex va a volver o debo soltar?</li>
                  <li>¿Por qué repito el mismo tipo de relaciones?</li>
                  <li>¿Estoy listo para una nueva relación?</li>
                  <li>¿Mi relación tiene futuro?</li>
                </ul>

                <p className="mt-4"><strong>Trabajo y propósito:</strong></p>
                <ul className="questions-list">
                  <li>¿Debo cambiar de trabajo o esperar?</li>
                  <li>¿Estoy en el camino correcto?</li>
                  <li>¿Qué bloquea mi crecimiento económico?</li>
                  <li>¿Cómo alinearme con mi propósito?</li>
                  <li>¿Qué viene para mí en los próximos meses?</li>
                </ul>
                
                <p className="cta-text text-center mt-4">
                  Si alguna de estas preguntas resuena contigo, una lectura puede darte la claridad que estás buscando.
                </p>
              </div>

              <p className="final-reflection text-center mt-5">
                Este espacio es mi <strong>rayito de luz</strong> para quienes están listos para mirar hacia dentro.  
                <br />
                <strong>Si estás aquí, ya comenzaste tu proceso.</strong>
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;