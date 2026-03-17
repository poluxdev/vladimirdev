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

  const links = {
    paypal14: "https://www.paypal.com/paypalme/vladimirGarciaL/14USD",
    paypal23: "https://www.paypal.com/paypalme/vladimirGarciaL/23USD",
    mercadoPago14: "https://mpago.la/1pdqLUS", 
    mercadoPago23: "https://mpago.la/2DPtzuj",
  };
  
  const email = "eldiariopolux@gmail.com";
  const whatsappNumber = "51929441018";

  return (
    <section id="tarot" className="tarot-section">
      <div className="container">
        
        {/* CABECERA */}
        <div className="hero-content">
          <h2 className="text-center">🔮 Tu intuición te trajo aquí por una razón</h2>
          <p className="text-center lead-text">
            Hay preguntas que no te dejan dormir. <strong>No estás aquí por casualidad:</strong> 
            el tarot es el espejo de lo que tu alma ya sabe.
          </p>
        </div>

        {/* PASO 1: SELECCIÓN DE LECTURA */}
        <div className="payment-container mt-5">
          <h3 className="text-center mb-4">Paso 1: Selecciona tu consulta según tu duda</h3>
          
          <div className="payment-grid">

            {/* OPCIÓN: PERÚ (Local) */}
            <div className="payment-card peru-card">
              <div className="card-badge">🇵🇪 Perú</div>
              <h4>Residentes Local</h4>
              
              <div className="local-prices">
                <div className="price-line"><strong>S/ 45</strong> <span>Lectura Concreta</span></div>
                <div className="price-line"><strong>S/ 75</strong> <span>Lectura Evolutiva</span></div>
              </div>

              <div className="button-group-vertical mt-3">
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

            {/* OPCIÓN: INTERNACIONAL LECTURA CONCRETA */}
            <div className="payment-card international-card">
              <div className="card-badge">✨ Rápida</div>
              <h4>Lectura Concreta</h4>
              <p className="price">$ 14 USD</p>
              
              <p className="card-instruction">Ideal para <strong>una sola duda</strong> puntual:</p>
              <ul className="example-list">
                <li>❓ <em>"¿Esa persona especial me volverá a buscar?"</em></li>
                <li>❓ <em>"¿Lograré concretar ese negocio o empleo?"</em></li>
                <li>❓ <em>"¿Mi ex todavía piensa en mí?"</em></li>
              </ul>

              <div className="button-group-vertical">
                <a href={links.mercadoPago14} target="_blank" rel="noopener noreferrer" className="btn btn-mercadopago">
                  💳 Tarjeta / Mercado Pago
                </a>
                <a href={links.paypal14} target="_blank" rel="noopener noreferrer" className="btn btn-paypal-simple">
                  PayPal ($14)
                </a>
              </div>
            </div>

            {/* OPCIÓN: INTERNACIONAL LECTURA EVOLUTIVA */}
            <div className="payment-card international-card featured">
              <div className="card-badge gold">⭐ La más completa</div>
              <h4>Lectura Evolutiva</h4>
              <p className="price">$ 23 USD</p>
              
              <p className="card-instruction">Para quienes necesitan <strong>ver todo el panorama</strong>:</p>
              <ul className="example-list">
                <li>🔮 <em>"¿Qué siente por mí, cuáles son sus intenciones y qué pasará?"</em></li>
                <li>🔮 <em>"¿Cómo me irá en lo profesional y en el amor este mes?"</em></li>
                <li>🔮 <em>"¿Por qué mis relaciones se bloquean y qué viene para mi futuro?"</em></li>
              </ul>

              <div className="button-group-vertical">
                <a href={links.mercadoPago23} target="_blank" rel="noopener noreferrer" className="btn btn-mercadopago">
                  💳 Tarjeta / Mercado Pago
                </a>
                <a href={links.paypal23} target="_blank" rel="noopener noreferrer" className="btn btn-paypal">
                  Pagar con PayPal ($23)
                </a>
                <button className="btn btn-binance" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
                  ₿ Binance (23 USDT)
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* PASO 2: CONTACTO */}
        <div className="delivery-instructions mt-5">
          <h3 className="text-center">Paso 2: Envía tus datos de consulta</h3>
          <p className="text-center mb-4">Luego de pagar, envíame el comprobante para agendarte:</p>

          <div className="contact-methods-grid">
            <div className="contact-card">
              <div className="icon">📱</div>
              <h4>WhatsApp</h4>
              <p>Envía comprobante, nombre y tu duda. Recibirás tu <strong>video como documento</strong> en menos de 24 horas.</p>
             <a 
  href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20✨%20Ya%20realicé%20el%20pago%20de%20mi%20lectura.%20Aquí%20te%20envío%20el%20comprobante.%20Mi%20nombre%20es:%20____%20y%20mi%20pregunta%20es:%20____%20🔮`}
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn btn-whatsapp"
>
  Enviar por WhatsApp
</a>
            </div>

            <div className="contact-card">
              <div className="icon">📧</div>
              <h4>Email</h4>
              <p>Envía tus datos a <strong>{email}</strong>. Te responderé con un link de descarga seguro.</p>
             <a 
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Consulta%20de%20Tarot%20-%20Comprobante&body=Hola%20Polux!%20✨%0A%0AYa%20realicé%20el%20pago%20de%20mi%20lectura.%0AAquí%20te%20envío%20el%20comprobante.%0A%0AMi%20nombre%20es:%20____%0AMi%20pregunta%20es:%20____%20🔮`}
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn btn-email"
>
  Enviar por Correo
</a>
            </div>
          </div>
        </div>

        {/* NOTA DE ESCASEZ */}
        <div className="scarcity-box">
          <p className="warning-text">
            ⚠️ <strong>Nota:</strong> Solo realizo un número limitado de lecturas al día para garantizar una conexión energética real y profunda con cada caso.
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