import React from 'react';
import './ConsultasTarot.css';

const ConsultasTarot = () => {
  // Función para bajar al footer y abrir el QR (Binance, Yape, Plin, Dale)
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

  // Enlaces de pago
  const linkMercadoPago = "https://mpago.la/2DPtzuj";
  const linkPayPal = "https://www.paypal.com/paypalme/vladimirGarciaL?country.x=PE&locale.x=es_XC";
  
  // Datos de contacto configurados
  const email = "eldiariopolux@gmail.com";
  const whatsappNumber = "51929441018"; // Tu número de Perú configurado correctamente

  return (
    <section id="tarot" className="tarot-section">
      <div className="container">
        
        {/* CABECERA EMOCIONAL */}
        <div className="hero-content">
          <h2 className="text-center">🔮 Tu intuición te trajo aquí por una razón</h2>
          <p className="text-center lead-text">
            Hay preguntas que no te dejan dormir. <strong>No estás aquí por casualidad:</strong> 
            el tarot es el espejo de lo que tu alma ya sabe, pero tu mente aún no logra ver.
          </p>
        </div>

        {/* PASO 1: EL PAGO */}
        <div className="payment-container mt-5">
          <h3 className="text-center mb-4">Paso 1: Elige tu método de pago</h3>
          
          <div className="payment-grid">
            {/* GRUPO PERÚ */}
            <div className="payment-card peru-card">
              <div className="card-badge">🇵🇪 Local</div>
              <h4>Residentes en Perú</h4>
              <p className="price">S/ 75</p>
              <div className="button-group-vertical">
                <button className="btn btn-yape" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>
                  📱 Pagar con Yape
                </button>
                <button className="btn btn-plin" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>
                  ⚡ Pagar con Plin
                </button>
                <button className="btn btn-dale" onClick={() => scrollToFooterAndOpenQR('btn-dale')}>
                  🏦 Transferencia DALE
                </button>
              </div>
            </div>

            {/* GRUPO INTERNACIONAL */}
            <div className="payment-card international-card featured">
              <div className="card-badge gold">🌎 Global</div>
              <h4>Latam & Internacional</h4>
              <p className="price">$ 23 USD</p>
              <div className="button-group-vertical">
                <a href={linkMercadoPago} target="_blank" rel="noopener noreferrer" className="btn btn-mercadopago">
                  💳 Tarjeta (Débito o Crédito)
                </a>
                <a href={linkPayPal} target="_blank" rel="noopener noreferrer" className="btn btn-paypal">
                  🔵 PayPal (Pago Seguro)
                </a>
                <button className="btn btn-binance" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
                  ₿ Binance (23 USDT)
                </button>
              </div>
              <small className="conversion-note">
                (Se convierte automáticamente a tu moneda local)
              </small>
            </div>
          </div>
        </div>

        {/* PASO 2: EL ENVÍO DE DATOS */}
        <div className="delivery-instructions mt-5">
          <h3 className="text-center">Paso 2: Envía tus datos de consulta</h3>
          <p className="text-center mb-4">Una vez realizado el pago, envíame por el canal que prefieras:</p>
          
          <div className="contact-methods-grid">
            
            {/* WHATSAPP */}
            <div className="contact-card">
              <div className="icon">📱</div>
              <h4>WhatsApp</h4>
              <p>Envía comprobante, nombre y pregunta. Recibirás tu <strong>video como documento</strong> directamente.</p>
              <a href={`https://wa.me/${whatsappNumber}?text=Hola!%20He%20realizado%20el%20pago%20de%20mi%20lectura.%20Aquí%20tienes%20mi%20comprobante...`} 
                 target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                Enviar por WhatsApp
              </a>
            </div>

            {/* CORREO */}
            <div className="contact-card">
              <div className="icon">📧</div>
              <h4>Correo Electrónico</h4>
              <p>Envía tus datos a <strong>{email}</strong>. Te responderé con un link de <strong>TransferNow</strong>.</p>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Consulta%20de%20Tarot%20-%20Comprobante`} 
                 target="_blank" rel="noopener noreferrer" className="btn btn-email">
                Enviar por Correo
              </a>
            </div>
          </div>

          <div className="expiration-notice mt-4">
            <p>
              ⚠️ <strong>Privacidad y Tiempo:</strong> Los videos enviados por correo expiran en <strong>7 días</strong> por TransferNow. ¡Asegúrate de descargarlo!
            </p>
          </div>
        </div>

        {/* CIERRE */}
        <div className="scarcity-box">
          <p className="warning-text">
            ⚠️ <strong>Atención:</strong> Solo realizo un número limitado de lecturas profundas al día para garantizar una conexión real.
          </p>
        </div>

        <p className="cta mt-5 text-center fw-bold">
          🔮 No permitas que la duda siga drenando tu energía. <br />
          <span className="text-highlight">Haz tu consulta hoy y recupera tu paz mental.</span>
        </p>
      </div>
    </section>
  );
};

export default ConsultasTarot;