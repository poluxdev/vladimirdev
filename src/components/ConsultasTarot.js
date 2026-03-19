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
          <h2 className="text-center">🔮 Lectura Personalizada</h2>
          <p className="text-center lead-text">
            Si sientes que necesitas claridad, aquí puedes acceder a una lectura enfocada en tu situación actual.
            No es una predicción fija, es una interpretación profunda para ayudarte a entender lo que estás viviendo.
          </p>
        </div>

        <div className="guide-wrapper">
          
          {/* PASO 1 */}
          <div className="guide-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Accede a tu lectura</h3>
              <p>
                Este es un espacio personalizado donde me enfoco completamente en tu energía y tu pregunta.
                Puedes elegir el método que prefieras para solicitar tu lectura.
              </p>

              <p className="text-center subtle-text">
                Cada lectura es única y se realiza de forma consciente, sin respuestas automáticas ni interpretaciones genéricas.
              </p>
              
              <div className="payment-grid">
                
                {/* PERÚ */}
                <div className="payment-card">
                  <span className="location-tag">🇵🇪 Perú</span>
                  <p className="price">S/ 25.00</p>
                  <div className="button-group-vertical">
                    <button className="btn btn-yape" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>
                      📱 Quiero mi lectura (Yape)
                    </button>
                    <button className="btn btn-plin" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>
                      ⚡ Quiero mi lectura (Plin)
                    </button>
                  </div>
                </div>

                {/* INTERNACIONAL */}
                <div className="payment-card featured">
                  <span className="location-tag">🌍 Internacional</span>
                  <p className="price">$ 8.00 USD</p>
                  <div className="button-group-vertical">
                    <a href={links.mercadoPago} target="_blank" rel="noopener noreferrer" className="btn btn-mercadopago">
                      💳 Quiero mi lectura (Tarjeta)
                    </a>
                    <a href={links.paypal} target="_blank" rel="noopener noreferrer" className="btn btn-paypal">
                      🟡 Quiero mi lectura (PayPal)
                    </a>
                    <button className="btn btn-binance" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
                      ₿ Quiero mi lectura (USDT)
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* PASO 2 */}
          <div className="guide-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Cuéntame tu situación</h3>
              <p>
                Puedes hacer una pregunta compleja o profunda. 
                Me enfocaré en tu caso para interpretar las cartas con claridad y detalle.
              </p>
              
              <div className="contact-methods-grid">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20✨%20Quiero%20mi%20lectura.%0A%0AMi%20Nombre:%20____%0AMi%20Pregunta:%20____%0A%0A(Adjunto%20comprobante)%20🔮`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-option"
                >
                  <span className="icon">📱</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Rápido y directo</span>
                  </div>
                </a>

                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Lectura%20Tarot%20Personalizada&body=Hola%20Polux!%20✨%0A%0AQuiero%20mi%20lectura.%0A%0AMi%20nombre:%20____%0AMi%20pregunta:%20____%0A%0A🔮`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-option"
                >
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <span>Mayor privacidad</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* PASO 3 */}
          <div className="guide-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Recibe tu lectura</h3>
              <p>
                En un plazo máximo de <strong>24 horas</strong>, recibirás tu lectura en video.
                Podrás verla con calma, entender cada mensaje y volver a ella cuando lo necesites.
              </p>
            </div>
          </div>

        </div>

        {/* CIERRE */}
        <div className="final-note text-center">
          <p>
            ✨ Este espacio es completamente confidencial y está pensado para acompañarte con respeto, claridad y consciencia.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConsultasTarot;