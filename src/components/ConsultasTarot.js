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

        {/* HERO */}
        <div className="text-center mb-5">
          <h1 className="display-3 text-white mb-3">
            Tu lectura de Tarot personalizada
          </h1>

          <p className="lead-text mx-auto" style={{maxWidth: '750px'}}>
            No es una lectura general. Es un mensaje directo para tu situación actual. 
            Vas a entender qué está pasando, qué viene y qué decisión tomar.
          </p>

          <p className="text-warning mt-3">
            ⚡ Entrega en menos de 24 horas
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className="row text-center mb-5">
          <div className="col-md-4 mb-3">
            <h5 className="text-white">🔮 100% Personal</h5>
            <p>Tu caso específico, no contenido genérico.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-white">🎥 Video privado</h5>
            <p>Explicación clara carta por carta.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-white">🧠 Claridad real</h5>
            <p>No validación vacía, sino dirección.</p>
          </div>
        </div>

        {/* PRECIO */}
        <div className="text-center mb-5">
          <h2 className="text-white">Accede a tu lectura</h2>

          <p className="payment-note">
            🔒 Pago único • Sin suscripciones • Acceso inmediato
          </p>

          <div className="price-tag-big mt-3">
            $10 USD
          </div>

          <p className="price-local">
            🇵🇪 Precio especial en Perú: S/ 25
          </p>
        </div>

        {/* PAGOS */}
        <div className="payment-card international featured mb-5">
          <div className="card-header-inner">💳 Métodos de pago</div>

          <div className="d-grid gap-3 mt-4">

            {/* PERÚ */}
            <button 
              className="btn btn-payment yape"
              onClick={() => scrollToFooterAndOpenQR('btn-yape')}
            >
              📱 Pagar con Yape / Plin / Dale (S/ 25)
            </button>

            {/* INTERNACIONAL */}
            <a 
              href={links.paypal} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-payment paypal"
            >
              PayPal (tarjeta o cuenta)
            </a>

            <button 
              className="btn btn-payment binance" 
              onClick={() => scrollToFooterAndOpenQR('btn-binance')}
            >
              Binance Pay (sin comisiones)
            </button>

            <a 
              href={links.global66} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-payment global"
            >
              Global66
            </a>

          </div>

          <p className="text-center mt-3">
            🔑 <strong>Un solo número para todo:</strong> +51 929 441 018
          </p>

          <p className="text-center">
            🇵🇪 Yape • Plin • Dale  
            🌍 Global66
          </p>

          <p className="text-success text-center mt-1">
            ✔ Mismo número para pagar y enviar comprobante
          </p>

          <p className="text-center mt-2">
            💡 Puedes usar cualquier método sin problema.
          </p>

          <p className="payment-trust">
            ✔ Pago seguro • Atención directa • Respuesta rápida
          </p>
        </div>

        {/* PROCESO */}
        <div className="guide-wrapper">

          <div className="guide-step mb-4">
            <div className="step-badge">1</div>
            <div className="step-content">
              <h4 className="text-white">Realiza el pago</h4>
              <p>Elige el método que prefieras arriba.</p>
            </div>
          </div>

          <div className="guide-step mb-4">
            <div className="step-badge">2</div>
            <div className="step-content">
              <h4 className="text-white">Envía tu pregunta</h4>
              <p>Nombre + situación o duda específica.</p>
            </div>
          </div>

          <div className="guide-step">
            <div className="step-badge">3</div>
            <div className="step-content">
              <h4 className="text-white">Recibe tu video</h4>
              <p>Respuesta clara, directa y sin rodeos en menos de 24h.</p>
            </div>
          </div>

        </div>

        {/* CONTACTO */}
        <div className="contact-row mt-5">

          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20Ya%20realicé%20el%20pago%20de%20S%2F35%20/%2015USD%20y%20quiero%20mi%20lectura`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card"
          >
            <span>📱</span>
            <div>
              <strong>Enviar comprobante por WhatsApp</strong>
              <p>Recibe tu lectura más rápido ⚡</p>
            </div>
          </a>

          <a 
            href={`mailto:${email}`} 
            className="contact-card"
          >
            <span>📧</span>
            <div>
              <strong>Enviar comprobante por Email</strong>
              <p>Opción más privada</p>
            </div>
          </a>

        </div>

        {/* CIERRE */}
        <div className="text-center mt-5">
          <p className="text-white" style={{maxWidth:'700px', margin:'0 auto'}}>
            Si estás aquí, no es casualidad. Hay algo que necesitas entender ahora.  
            El tarot no decide por ti, pero sí te muestra lo que no estás viendo.
          </p>

          <p className="text-warning mt-3">
            ✨ Toma acción hoy
          </p>
        </div>

      </div>
    </section>
  );
};

export default ConsultasTarot;