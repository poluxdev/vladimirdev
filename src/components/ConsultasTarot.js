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

  // NUEVO LINK DE MERCADO PAGO ACTUALIZADO
  const linkMercadoPago = "https://mpago.la/2DPtzuj"; 

  return (
    <section id="tarot" className="tarot-section">
      <div className="container">

        {/* HERO */}
        <h2 className="text-center">
          🔮 La respuesta que necesitas escuchar ahora
        </h2>

        <p className="text-center fw-bold mt-3">
          Si llevas días pensando en una persona, una decisión o un bloqueo que no logras entender,
          esta lectura es para ti.
        </p>

        <p className="text-center">
          Cuando el tarot aparece, no es casualidad.  
          Algo quiere mostrarse… y hoy puedes verlo con claridad.
        </p>

        {/* PROMESA */}
        <div className="highlight-box mt-4">
          <p>
            Esta no es una lectura genérica ni automática.
            Grabaré un <strong>video exclusivo para ti</strong>, mostrando las cartas reales que salen en tu tirada
            y diciéndote <strong>la verdad que ahora mismo no estás viendo</strong>.
          </p>

          <p className="fw-bold">
            Ideal si te preguntas:
          </p>

          <ul>
            <li>¿Tiene sentido seguir insistiendo o es momento de soltar?</li>
            <li>¿Qué energía está bloqueando mi camino ahora?</li>
            <li>¿Qué decisión me conviene tomar en este momento?</li>
            <li>¿Qué quiere decirme esta situación que se repite?</li>
          </ul>
        </div>

        {/* COMO FUNCIONA */}
        <h3 className="mt-5">¿Cómo funciona la lectura?</h3>
        <ol>
          <li>Realizas el pago por el medio que prefieras.</li>
          <li>
            Me envías por WhatsApp o correo:
            <br />– Tu <strong>nombre</strong>
            <br />– Tu <strong>pregunta</strong>
            <br />– El <strong>comprobante de pago</strong>
          </li>
          <li>
            Recibes tu <strong>video personalizado</strong> en menos de 24 horas.
          </li>
        </ol>

        <p className="mt-3">
          📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=eldiariopolux@gmail.com" target="_blank" rel="noopener noreferrer">
            eldiariopolux@gmail.com
          </a>
        </p>

        {/* SECCIÓN INVERSIÓN */}
        <div className="inversion-info mt-4">
            <h3 className="">Inversión</h3>
            <p>🇵🇪 <strong>Perú:</strong> S/ 75 <small>(Yape, Plin o DALE)</small></p>
            
            <p>🌎 <strong>Latam e Internacional:</strong> $ 23 USD
              <br />
              <small style={{ fontSize: '0.9rem', color: 'var(--color-pink)' }}>
                (Paga el equivalente a <strong>23 USD</strong> en tu moneda local. Mercado Pago/PayPal harán la conversión automáticamente)
              </small>
            </p>
        </div>

        <p className="fw-bold text-warning">
          ⚠️ Tomo pocas lecturas al día para mantener la calidad.
          Si estás aquí, probablemente no sea casualidad.
        </p>

        {/* BOTONES DE PAGO */}
        <div className="payment-buttons mt-4">
          <h3 className="w-100 mb-4">Reserva tu lectura ahora:</h3>

          {/* MERCADO PAGO */}
          <a href={linkMercadoPago} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <button className="btn btn-mercadopago m-2">
              💳 Pagar con Tarjeta (Débito o Crédito)
            </button>
          </a>

          {/* PAYPAL */}
          <a href="https://paypal.me/vladimirGarciaL?country.x=PE&locale.x=es_XC" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <button className="btn btn-paypal m-2">
              🔵 Pagar con PayPal ($23 USD)
            </button>
          </a>

          {/* BINANCE */}
          <button className="btn btn-binance m-2" onClick={() => scrollToFooterAndOpenQR('btn-binance')}>
            ₿ Pagar con Binance (23 USDT)
          </button>

          {/* CONTENEDOR PARA BOTONES DE PERÚ EN HORIZONTAL */}
          <div className="peru-buttons-container mt-2">
            <button className="btn btn-yape m-2" onClick={() => scrollToFooterAndOpenQR('btn-yape')}>
              📱 Pagar con Yape (Perú - S/ 75)
            </button>

            <button className="btn btn-plin m-2" onClick={() => scrollToFooterAndOpenQR('btn-plin')}>
              ⚡ Pagar con Plin (Perú - S/ 75)
            </button>

            <button className="btn btn-dale m-2" onClick={() => scrollToFooterAndOpenQR('btn-dale')}>
              🏦 Pagar con DALE (Perú - S/ 75)
            </button>
          </div>
        </div>

        {/* CIERRE */}
        <p className="cta mt-5 text-center fw-bold">
          🔮 A veces no necesitas más tiempo…  
          necesitas una respuesta clara.  
          <br />
          <span className="text-primary">
            Haz tu consulta ahora y deja de cargar la duda.
          </span>
        </p>

      </div>
    </section>
  );
};

export default ConsultasTarot;