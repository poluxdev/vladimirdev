import React from 'react';
import './ConsultasTarot.css';

const ConsultasTarot = () => {
  const scrollToFooterAndOpenQR = (id) => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
      // Esperar a que se desplace antes de hacer clic
      setTimeout(() => {
        const btn = document.getElementById(id);
        if (btn) btn.click();
      }, 600);
    }
  };

  return (
    <section id="tarot" className="tarot-section">
      <div className="container">
        <h2>Consulta de Tarot</h2>
        <p>¿Tienes dudas sobre el amor, trabajo, decisiones importantes o tu propósito? Consulta el tarot y recibe una respuesta personalizada.</p>

        <h3>Ejemplos de Preguntas:</h3>
        <ul>
          <li>¿Qué me espera en el amor los próximos meses? (3 cartas)</li>
          <li>¿Cómo puedo desbloquear mi situación laboral? (3 cartas)</li>
          <li>¿Qué mensaje tiene el tarot para mí hoy? (1 carta)</li>
          <li>¿Mi pareja me es fiel? (1-3 cartas) - Dar nombre de la persona</li>
          <li>¿Volveré con mi ex? (3 cartas)</li>
          <li>¿Estoy con la persona correcta? (3 cartas)</li>
          <li>¿Me van a contratar en ese trabajo? (1-3 cartas)</li>
          <li>¿Es buen momento para mudarme? (3 cartas)</li>
          <li>¿Cómo mejorar la relación con mi pareja? (5 cartas)</li>
          <li>¿Qué obstáculos afectan mi situación laboral? (5 cartas)</li>
          <li>¿Qué siente esa persona por mí? (5 cartas) - Dar nombre</li>
          <li>¿Qué me oculta esa persona? (5 cartas) - Dar nombre</li>
          <li>¿Cuál es mi propósito de vida? (7-10 cartas)</li>
          <li>¿Qué debo aprender de esta etapa que estoy viviendo? (7 cartas)</li>
          <li>¿Cómo sanar emocionalmente? (7 cartas)</li>
          <li>¿Qué mensaje tienen mis guías espirituales? (7-10 cartas)</li>
          <li>¿Cómo mejorar la comunicación con mis hijos? (7-10 cartas)</li>
        </ul>

        <h3>¿Cómo funciona?</h3>
        <ol>
          <li>Realiza tu pago por uno de los medios disponibles.</li>
          <li>Envía tu pregunta y comprobante de pago por WhatsApp o correo.</li>
          <li>Recibirás tu lectura personalizada en menos de 24 horas (texto + foto de la tirada).</li>
        </ol>

        <h3>Costos:</h3>
        <p>🇵🇪 Perú: S/ 15 (Yape o Plin)</p>
        <p>🌎 Internacional: $4 USD (PayPal o Binance)</p>

        <div className="payment-buttons">
          <h3>Realiza tu pago:</h3>
          <button className="btn btn-primary m-2" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>Pagar con Yape</button>
          <button className="btn btn-success m-2" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>Pagar con Plin</button>
          <button className="btn btn-warning m-2" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>Pagar con Binance</button>
          <a href="https://paypal.me/vladimirGarciaL?country.x=PE&locale.x=es_XC" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-info m-2">Pagar con PayPal</button>
          </a>
        </div>

        <p className="cta">🌟 ¡Conecta con el tarot y descubre tu camino! 🌟</p>
      </div>
    </section>
  );
};

export default ConsultasTarot;
