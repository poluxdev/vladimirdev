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
    mercadoPagoNuevo: "https://mpago.la/33BgYwg", 
  };
  
  const email = "eldiariopolux@gmail.com";
  const whatsappNumber = "51929441018";

  return (
    <section id="tarot" className="tarot-section">
      <div className="container">
        
        {/* CABECERA: ENFOQUE EN LA PAZ MENTAL Y PRIVACIDAD */}
        <div className="hero-content">
          <h2 className="text-center">🔮 Encuentra la claridad que necesitas hoy</h2>
          <p className="text-center lead-text">
            No estás aquí para tomar más decisiones difíciles. Estás aquí para recibir respuestas. 
            <strong> Una sola lectura profunda, directa y totalmente privada.</strong>
          </p>
        </div>

        {/* PASO 1: INVERSIÓN ÚNICA */}
        <div className="payment-container mt-5">
          <h3 className="text-center mb-4">Paso 1: Realiza tu inversión</h3>
          
          <div className="payment-grid single-option">

            {/* OPCIÓN PERÚ */}
            <div className="payment-card peru-card">
              <div className="card-badge">🇵🇪 Residentes Perú</div>
              <h4>Lectura Privada</h4>
              <p className="price">Inversión: S/ 25.00</p>
              
              <div className="button-group-vertical mt-3">
                <button className="btn btn-yape" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>
                  📱 Invertir con Yape
                </button>
                <button className="btn btn-plin" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>
                  ⚡ Invertir con Plin
                </button>
              </div>
            </div>

            {/* OPCIÓN INTERNACIONAL */}
            <div className="payment-card international-card featured">
              <div className="card-badge gold">🌍 Internacional</div>
              <h4>Lectura Privada</h4>
              <p className="price">Inversión: $ 8.00 USD</p>

              <div className="button-group-vertical">
                <a href={links.mercadoPagoNuevo} target="_blank" rel="noopener noreferrer" className="btn btn-mercadopago">
                  💳 Tarjeta / Mercado Pago
                </a>
                <a href={links.paypal} target="_blank" rel="noopener noreferrer" className="btn btn-paypal">
                  PayPal ($8 USD)
                </a>
                <button className="btn btn-binance" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
                  ₿ Binance (8 USDT)
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* PASO 2: CONTACTO DIRECTO */}
        <div className="delivery-instructions mt-5">
          <h3 className="text-center">Paso 2: Envía tu nombre, pregunta y comprobante</h3>
          <p className="text-center mb-4">Tus datos y tu consulta son manejados con absoluta reserva:</p>

          <div className="contact-methods-grid">
            <div className="contact-card">
              <div className="icon">📱</div>
              <h4>WhatsApp</h4>
              <p>Recibe tu <strong>video privado</strong> en menos de 24 horas directamente en tu chat.</p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20✨%20Ya%20realicé%20mi%20inversión.%0A%0AMi%20Nombre:%20____%0AMi%20Pregunta:%20____%0A%0A(Adjunto%20comprobante)%20🔮`}
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
              <p>Recibe un link exclusivo y privado con la interpretación de tus cartas.</p>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Consulta%20Tarot%20Privada%20-%20Datos&body=Hola%20Polux!%20✨%0A%0AYa%20realicé%20mi%20inversión.%0A%0AMi%20nombre%20es:%20____%0AMi%20pregunta%20es:%20____%0A%0A(Adjunto comprobante)%20🔮`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-email"
              >
                Enviar por Correo
              </a>
            </div>
          </div>
        </div>

        <div className="scarcity-box mt-5">
          <p className="warning-text text-center">
            ✨ Tu lectura es **100% confidencial**. Recibirás tu video personalizado en menos de 24 horas.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConsultasTarot;