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
    global66: "https://share.global66.com/VLAGAR674", 
  };
  
  const email = "eldiariopolux@gmail.com";
  const whatsappNumber = "51929441018";

  return (
    <section id="tarot" className="tarot-section py-5">
      <div className="container">
        
        {/* CABECERA MÍSTICA */}
        <div className="section-header text-center mb-5">
          <h2 className="display-4 text-white">Tu Lectura Personalizada</h2>
          <div className="separator mx-auto mb-4"></div>
          <p className="lead-text mx-auto" style={{maxWidth: '800px'}}>
            Un espacio de total privacidad donde el Tarot se convierte en el espejo de tu energía. 
            Recibe la claridad que necesitas para retomar tu poder personal.
          </p>
        </div>

        {/* PASO 1: EL PAGO (La Inversión) */}
        <div className="guide-wrapper">
          <div className="guide-step mb-5">
            <div className="step-badge">Paso 1</div>
            <div className="step-content">
              <h3 className="text-white mb-4">Elige tu modalidad</h3>
              
              <div className="payment-grid">
                {/* OPCIÓN PERÚ */}
                <div className="payment-card local">
                  <div className="card-header-inner">🇵🇪 Perú</div>
                  <div className="price-tag">S/ 35</div>
                  <p className="payment-desc">Lectura completa en video</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-payment yape" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>
                      Pagar con Yape
                    </button>
                    <button className="btn btn-payment plin" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>
                      Pagar con Plin
                    </button>
                  </div>
                </div>

                {/* OPCIÓN INTERNACIONAL */}
                <div className="payment-card international featured">
                  <div className="card-header-inner">🌍 Internacional</div>
                  <div className="price-tag">$ 15 <small>USD</small></div>
                  <p className="payment-desc">Disponible para todo el mundo</p>
                  <div className="d-grid gap-2">
                    <a href={links.global66} target="_blank" rel="noopener noreferrer" className="btn btn-payment global">
                      Global66 (Latam 0% Comisión)
                    </a>
                    <a href={links.paypal} target="_blank" rel="noopener noreferrer" className="btn btn-payment paypal">
                      PayPal / Tarjeta
                    </a>
                    <button className="btn btn-payment binance" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
                      Binance Pay (USDT)
                    </button>
                  </div>
                  <p className="argentina-note">🇦🇷 Argentina: Recomendamos Global66 para evitar impuestos bancarios.</p>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 2: EL CONTACTO */}
          <div className="guide-step mb-5">
            <div className="step-badge">Paso 2</div>
            <div className="step-content">
              <h3 className="text-white mb-4">Envía tu información</h3>
              {/* Cambiado de text-muted a text-white para legibilidad */}
              <p className="text-white mb-4">Una vez realizado el pago, envíame los detalles para tu interpretación:</p>
              
              <div className="contact-row">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20✨%20He%20realizado%20el%20pago.%0A%0A*Mi%20Nombre:*%20%0A*Mi%20Pregunta:*%20%0A%0A(Adjunto%20comprobante)%20🔮`} 
                  target="_blank" rel="noopener noreferrer" className="contact-card"
                >
                  <span className="contact-icon">📱</span>
                  <div className="contact-info">
                    <strong>Vía WhatsApp</strong>
                    <span>Opción más rápida</span>
                  </div>
                </a>

                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Lectura%20Tarot&body=Nombre:%20%0APregunta:%20`} 
                  target="_blank" rel="noopener noreferrer" className="contact-card"
                >
                  <span className="contact-icon">📧</span>
                  <div className="contact-info">
                    <strong>Vía Email</strong>
                    <span>Mayor privacidad</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* PASO 3: LA ENTREGA */}
          <div className="guide-step">
            <div className="step-badge">Paso 3</div>
            <div className="step-content">
              <h3 className="text-white mb-4">Recibe tu video en 24h</h3>
              <div className="delivery-box">
                <p className="text-white mb-3">Tu lectura se graba de forma dedicada y exclusiva. Recibirás:</p>
                <ul className="delivery-list">
                  <li>✦ <strong>Video en alta calidad</strong> enviado como documento (WhatsApp).</li>
                  <li>✦ <strong>Enlace de descarga segura vía TransferNow</strong> (si eliges Email).</li>
                  <li>✦ Explicación detallada de cada carta y consejo evolutivo.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO TUTORIAL (COMENTADO TEMPORALMENTE)
        <div className="video-section mt-5 py-5 text-center">
          <p className="text-muted mb-4 italic">¿Tienes dudas sobre cómo solicitarla? Mira este breve video:</p>
          <div className="ratio ratio-16x9 mx-auto mistic-video-frame">
            <iframe src="https://www.youtube.com/embed/YTkrfnmBIV0" title="Tutorial Polux" allowFullScreen></iframe>
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default ConsultasTarot;