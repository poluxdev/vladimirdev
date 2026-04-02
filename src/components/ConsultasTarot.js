import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga4';
import './ConsultasTarot.css';

import qrBinance from '../images/binance.jpg';
import qrYape from '../images/yape.png';
import qrPlin from '../images/plin.png';

const ConsultasTarot = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQr, setSelectedQr] = useState(null);

  const whatsappNumber = "51929441018";
  
  const links = {
    hotmart: "https://pay.hotmart.com/A105188223X", // <-- link actualizado
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/12.99USD",
    global66: "https://share.global66.com/VLAGAR674",
  };

  const trackEvent = (action, label) => {
    ReactGA.event({
      category: 'Conversión Tarot',
      action,
      label,
      value: 12.99
    });
  };

  return (
    <section id="tarot" className="tarot-section py-5">
      <div className="container">

        <div className="price-card-featured mx-auto">
          <div className="badge-popular">⚡ MÁS SOLICITADA HOY</div>

          <h2 className="card-title-main">LECTURA DE TAROT EN VIDEO PERSONALIZADA</h2>
          <p className="card-subtitle-main">100% Personal, Privada y Directa</p>

          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">12.99</span>
            <span className="unit">USD</span>
          </div>

          <p className="text-warning mt-2">
            🇵🇪 Si estás en Perú, paga directo por WhatsApp (Yape o Plin)
          </p>

          <ul className="benefits-list-new">
            <li><span>🔮</span> Tu pregunta analizada en profundidad</li>
            <li><span>🎥</span> Video personalizado con tus cartas</li>
            <li><span>🧠</span> Respuesta clara y directa</li>
            <li><span>📩</span> Entrega en menos de 24h</li>
          </ul>

          {/* HOTMART */}
          <a 
            href={links.hotmart}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_hotmart', 'principal')}
            className="btn-main-cta w-100 text-center"
          >
            💳 PAGAR CON TARJETA (INTERNACIONAL)
          </a>

          {/* PERÚ */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hola%20quiero%20mi%20lectura`}
            className="btn btn-success w-100 mt-2"
          >
            🇵🇪 PAGAR DESDE PERÚ 
          </a>

          <button onClick={() => setShowModal(true)} className="btn btn-outline-light w-100 mt-2">
            Ver más métodos de pago
          </button>

        </div>

        {/* MODAL */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered className="tarot-payment-modal">
          <Modal.Body>

            {!selectedQr ? (
              <Row>
                <Col md={6}>
                  <h6>🇵🇪 Perú ($12.99)</h6>
                  <Button onClick={() => setSelectedQr({src: qrYape, title: 'Yape'})}>
                    Yape
                  </Button>
                  <Button onClick={() => setSelectedQr({src: qrPlin, title: 'Plin'})}>
                    Plin
                  </Button>
                </Col>

                <Col md={6}>
                  <h6>🌍 Internacional ($12.99)</h6>

                  <Button href={links.hotmart} target="_blank" rel="noopener noreferrer">
                    💳 Tarjeta (Hotmart)
                  </Button>

                  <Button href={links.paypal} target="_blank" rel="noopener noreferrer">
                    PayPal
                  </Button>

                  <Button href={links.global66} target="_blank" rel="noopener noreferrer">
                    Global66
                  </Button>

                  <Button onClick={() => setSelectedQr({src: qrBinance, title: 'Binance'})}>
                    Binance
                  </Button>
                </Col>
              </Row>
            ) : (
              <div className="text-center">
                <img src={selectedQr.src} alt="QR" style={{ maxWidth: '200px' }} />
                <h4>+51 929 441 018</h4>
                <Button onClick={() => setSelectedQr(null)}>Volver</Button>
              </div>
            )}

          </Modal.Body>
        </Modal>

      </div>
    </section>
  );
};

export default ConsultasTarot;