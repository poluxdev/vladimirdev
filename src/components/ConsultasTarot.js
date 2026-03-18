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
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/8USD",
    mercadoPago: "https://mpago.la/33BgYwg", 
  };
  
  const email = "eldiariopolux@gmail.com";
  const whatsappNumber = "51929441018";

  return (
    <section id="tarot" className="tarot-section">
      <div className="container">
        
        {/* CABECERA */}
        <div className="hero-content">
          <h2 className="text-center">🔮 Guía para tu Lectura Personalizada</h2>
          <p className="text-center lead-text">
            Sigue estos pasos para recibir una interpretación profunda de las cartas en formato video, 
            enfocada totalmente en tu energía actual.
          </p>
        </div>

        <div className="guide-wrapper">
          
          {/* PASO 1: EL PAGO */}
          <div className="guide-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Selecciona tu método de acceso</h3>
              <p>Elige la opción que prefieras para cubrir el valor de la sesión y recibir tu video.</p>
              
              <div className="payment-grid">
                {/* OPCIÓN PERÚ */}
                <div className="payment-card">
                  <span className="location-tag">🇵🇪 Perú</span>
                  <p className="price">S/ 25.00</p>
                  <div className="button-group-vertical">
                    <button className="btn btn-yape" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>
                      📱 Pagar con Yape
                    </button>
                    <button className="btn btn-plin" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>
                      ⚡ Pagar con Plin
                    </button>
                  </div>
                </div>

                {/* OPCIÓN INTERNACIONAL */}
                <div className="payment-card featured">
                  <span className="location-tag">🌍 Internacional</span>
                  <p className="price">$ 8.00 USD</p>
                  <div className="button-group-vertical">
                    <a href={links.mercadoPago} target="_blank" rel="noopener noreferrer" className="btn btn-mercadopago">
                      💳 Tarjeta / Mercado Pago
                    </a>
                    <a href={links.paypal} target="_blank" rel="noopener noreferrer" className="btn btn-paypal">
                      PayPal
                    </a>
                    <button className="btn btn-binance" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
                      ₿ Binance (USDT)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 2: EL CONTACTO */}
          <div className="guide-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Envía tu consulta</h3>
              <p>Para conectar con tu situación, envíame tu nombre, tu pregunta clara y el comprobante de pago.</p>
              
              <div className="contact-methods-grid">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20✨%20Ya%20realicé%20el%20pago.%0A%0AMi%20Nombre:%20____%0AMi%20Pregunta:%20____%0A%0A(Adjunto%20comprobante)%20🔮`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-option"
                >
                  <span className="icon">📱</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Envío rápido y directo</span>
                  </div>
                </a>

                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Consulta%20Tarot%20Personalizada&body=Hola%20Polux!%20✨%0A%0AYa%20realicé%20el%20pago.%0A%0AMi%20nombre:%20____%0AMi%20pregunta:%20____%0A%0A🔮`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-option"
                >
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <span>Para mayor privacidad</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* PASO 3: LA ENTREGA */}
          <div className="guide-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Recibe tu video</h3>
              <p>En un plazo máximo de <strong>24 horas</strong>, recibirás un enlace privado con la grabación de tu lectura para que puedas verla las veces que necesites.</p>
            </div>
          </div>

        </div>

        <div className="final-note text-center">
          <p>✨ Cada lectura es manejada con absoluta reserva y respeto por tu proceso personal.</p>
        </div>

      </div>
    </section>
  );
};

export default ConsultasTarot;