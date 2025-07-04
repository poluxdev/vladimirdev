import React from 'react';
import './ConsultasTarot.css';

const ConsultasTarot = () => {
  const scrollToFooterAndOpenQR = (id) => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
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

        <p>
          ¿Tienes dudas sobre el amor, trabajo, decisiones importantes o tu propósito? Consulta el tarot y recibe una respuesta 100% personalizada en video.
        </p>

        <p>
          La lectura será grabada exclusivamente para ti, mostrando las cartas reales que salieron en tu tirada. Será una lectura clara, puntual y dirigida a la situación que estás consultando.
        </p>

        <p>
          Para canalizar correctamente tu energía, necesito tu <strong>nombre</strong> al momento de hacer la lectura. Debido a la alta demanda, agradezco tu <strong>paciencia</strong>. Cada lectura toma su tiempo para ser precisa y significativa.
        </p>

        <h3>Ejemplos de Preguntas:</h3>
        <ul>
          <li>¿Qué me espera en el amor los próximos meses? (3 cartas)</li>
          <li>¿Cómo puedo desbloquear mi situación laboral? (3 cartas)</li>
          <li>¿Cuál es mi propósito de vida? (7-10 cartas)</li>
          <li>¿Qué debo aprender de esta etapa que estoy viviendo? (7 cartas)</li>
          <li>¿Qué mensaje tienen mis guías espirituales? (7-10 cartas)</li>
          <li>¿Qué siente esa persona por mí? (5 cartas)</li>
          <li>¿Qué me oculta esa persona? (5 cartas)</li>
          <li>¿Cómo sanar emocionalmente? (7 cartas)</li>
        </ul>

        <h3>¿Cómo funciona?</h3>
        <ol>
          <li>Realiza tu pago por uno de los medios disponibles.</li>
          <li>
            Envía tu pregunta, nombre completo y comprobante de pago por WhatsApp o correo:
            <br />
            📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=eldiariopolux@gmail.com" target="_blank" rel="noopener noreferrer">
              eldiariopolux@gmail.com
            </a>
          </li>
          <li>Recibirás un video grabado con tu lectura personalizada en menos de 24 horas.</li>
        </ol>

        <h3>Costos:</h3>
        <p>🇵🇪 Perú: S/ 20 - S/ 40 (Yape, Plin o DALE)</p>
        <p>🌎 Internacional: $5 - $10 USD (PayPal o Binance)</p>

        <div className="payment-buttons">
          <h3>Realiza tu pago:</h3>

          <button className="btn btn-yape m-2" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>
            <i className="bi bi-phone-fill"></i> Solicita tu lectura con Yape
          </button>

          <button className="btn btn-plin m-2" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>
            <i className="bi bi-lightning-fill"></i> Solicita tu lectura con Plin
          </button>

          <button className="btn btn-binance m-2" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
            <i className="bi bi-currency-bitcoin"></i> Realizar pago con Binance
          </button>

          <button className="btn btn-dale m-2" onClick={() => scrollToFooterAndOpenQR('btn-dale')}>
            <i className="bi bi-bank"></i> Confirmar tu consulta con DALE
          </button>

          <a href="https://paypal.me/vladimirGarciaL?country.x=PE&locale.x=es_XC" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-paypal m-2">
              <i className="bi bi-paypal"></i> Reservar lectura con PayPal
            </button>
          </a>
        </div>

        <p className="cta mt-4 text-center fw-bold">
          🔮 Cada lectura es única y personalizada, pero no estarán abiertas siempre. <br />
          ¿Y si justo hoy el tarot tenía algo importante que decirte… y lo dejas pasar? <br />
          <span className="text-primary">Haz tu consulta ahora y no te quedes con la duda.</span>
        </p>
      </div>
    </section>
  );
};

export default ConsultasTarot;
