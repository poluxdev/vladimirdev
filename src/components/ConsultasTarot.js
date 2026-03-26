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
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/15USD",
    // ✅ Actualizado con tu link de invitado de Global66
    global66: "https://share.global66.com/VLAGAR674", 
  };
  
  const email = "eldiariopolux@gmail.com";
  const whatsappNumber = "51929441018";

  return (
    <section id="tarot" className="tarot-section">
      <div className="container">
        
        {/* CABECERA */}
        <div className="hero-content">
          <h2 className="text-center">🔮 Lectura Personalizada con Polux</h2>
          <p className="text-center lead-text">
            Si sientes que necesitas claridad, aquí puedes acceder a una lectura enfocada en tu situación actual.
            Como <strong>tarotista profesional</strong>, te ofrezco una interpretación profunda para ayudarte a entender lo que estás viviendo.
          </p>
        </div>

        {/* VIDEO */}
        <div className="video-tutorial-wrapper mb-5 text-center">
          <h3 className="h5 mb-3">📺 Mira cómo solicitar tu lectura paso a paso</h3>
          <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '700px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <iframe 
              src="https://www.youtube.com/embed/YTkrfnmBIV0" 
              title="Cómo solicitar mi lectura de tarot - Polux" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="guide-wrapper">
          
          {/* PASO 1 */}
          <div className="guide-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Accede a tu lectura</h3>
              <p>
                Elige el método que prefieras según tu ubicación. La <strong>inversión</strong> garantiza una interpretación consciente y dedicada a tu energía.
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
                  <p className="price">$ 15.00 USD</p>

                  <div className="button-group-vertical">
                    {/* GLOBAL66 - MÉTODO RECOMENDADO LATAM */}
                    <a href={links.global66} target="_blank" rel="noopener noreferrer" className="btn btn-global66">
                      🚀 Global66 (Recomendado Latam)
                    </a>
                    <small style={{ fontSize: '0.75rem', marginTop: '-8px', marginBottom: '10px', color: '#ffcc00', textAlign: 'center', display: 'block' }}>
                      Ideal para Argentina, Chile y Colombia (0% comisión)
                    </small>

                    <a href={links.paypal} target="_blank" rel="noopener noreferrer" className="btn btn-paypal">
                      🟡 PayPal / Tarjeta
                    </a>

                    <button className="btn btn-binance" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
                      ₿ Binance (USDT / QR)
                    </button>
                  </div>

                  <p className="mt-3" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.2' }}>
                    ⚠️ Nota para Argentina: Global66 es la vía más económica para evitar altos impuestos bancarios.
                  </p>
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
                Envía tu comprobante y tu pregunta (puede ser profunda o compleja). Me enfocaré en tu caso para darte la mayor claridad posible.
              </p>
              
              <div className="contact-methods-grid">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20✨%20He%20realizado%20el%20pago%20de%20mi%20lectura.%0A%0AMi%20Nombre:%20____%0AMi%20Pregunta:%20____%0A%0A(Adjunto%20comprobante)%20🔮`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-option"
                >
                  <span className="icon">📱</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Envío directo del comprobante</span>
                  </div>
                </a>

                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Lectura%20Tarot%20Personalizada&body=Hola%20Polux!%20✨%0A%0AHe%20realizado%20mi%20pago.%0A%0AMi%20nombre:%20____%0AMi%20pregunta:%20____%0A%0A🔮`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-option"
                >
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <span>Opción para mayor privacidad</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* PASO 3 */}
          <div className="guide-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Recibe tu lectura personalizada</h3>
              <p>
                En un plazo máximo de <strong>24 horas</strong>, recibirás tu interpretación detallada:
              </p>
              <ul className="list-unstyled mt-2">
                <li className="mb-2">
                  ✅ <strong>Por WhatsApp:</strong> Recibirás el video en <strong>alta calidad (formato documento)</strong>.
                </li>
                <li>
                  ✅ <strong>Por Email:</strong> Recibirás un <strong>enlace privado</strong>.
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* CIERRE */}
        <div className="final-note text-center mt-5">
          <p>
            ✨ Este espacio es confidencial. Si llegaste hasta aquí... no es casualidad.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConsultasTarot;