import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { BsPaypal, BsQrCodeScan, BsCurrencyExchange, BsArrowRightCircle, BsEnvelopeAt } from 'react-icons/bs';
import ReactGA from 'react-ga4'; // 👈 Importación esencial para el rastreo
import './ConsultasTarot.css';

// Importación de tus imágenes de pago
import qrBinance from '../images/binance.jpg';
import qrYape from '../images/yape.png';
import qrPlin from '../images/plin.png';

const ConsultasTarot = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQr, setSelectedQr] = useState(null);

  const whatsappNumber = "51929441018";
  const emailContacto = "eldiariopolux@gmail.com";
  
  const links = {
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/9USD",
    global66: "https://share.global66.com/VLAGAR674",
  };

  /**
   * FUNCIÓN DE RASTREO ACTUALIZADA
   * Utiliza la librería react-ga4 inicializada en index.js
   */
  const trackEvent = (action, label) => {
    ReactGA.event({
      category: 'Conversión Tarot',
      action: action,
      label: label,
      value: 9 // Valor aproximado en USD de la conversión
    });
  };

  const handleOpenModal = () => {
    trackEvent('click_boton_reserva_principal', 'Abrió Modal de Pagos');
    setShowModal(true);
  };

  const handleOpenQr = (src, title, metodo) => {
    trackEvent('seleccion_metodo_pago_qr', metodo);
    setSelectedQr({ src, title });
  };

  const handleExternalLink = (metodo) => {
    trackEvent('click_pago_externo', metodo);
  };

  return (
    <section id="tarot" className="tarot-section py-5">
      <div className="container">
        
        {/* TARJETA PRINCIPAL */}
        <div className="price-card-featured mx-auto">
          <div className="badge-popular">⚡ MÁS SOLICITADA HOY</div>
          
          <h2 className="card-title-main">LECTURA DE TAROT EN VIDEO PERSONALIZADA</h2>
          <p className="card-subtitle-main">100% Personal, Privada y Directa</p>

          <div className="price-display">
            <span className="currency">$</span>
            <span className="amount">9</span>
            <span className="unit">USD</span>
          </div>
          <p className="availability-text">✨ Gracias por confiar en mi trabajo</p>

          <ul className="benefits-list-new">
            <li><span>🔮</span> Tu pregunta específica analizada en profundidad.</li>
            <li><span>🎥</span> Video privado con la interpretación de las cartas que te salieron.</li>
            <li><span>🧠</span> Claridad real y dirección sin rodeos.</li>
            <li><span>📩</span> Entrega en menos de 24 horas (WhatsApp o Email).</li>
          </ul>

          <button onClick={handleOpenModal} className="btn-main-cta w-100 border-0">
            🔮 RESERVAR MI LECTURA AHORA
          </button>

          <div className="payment-methods-grid mt-4">
             <div className="method-label">Aceptamos pagos de todo el mundo</div>
             <div className="icons-row">
                <span className="pay-icon">Yape</span>
                <span className="pay-icon">Plin</span>
                <span className="pay-icon">PayPal</span>
                <span className="pay-icon">Binance</span>
                <span className="pay-icon">Tarjeta</span>
             </div>
          </div>
        </div>

        {/* MODAL DE PAGOS CON TRACKING */}
        <Modal 
          show={showModal} 
          onHide={() => { setShowModal(false); setSelectedQr(null); }} 
          centered 
          className="tarot-payment-modal"
        >
          <Modal.Header closeButton className="border-0 text-white">
            <Modal.Title className="w-100 text-center">
              {selectedQr ? selectedQr.title : "Selecciona tu método de pago"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            {!selectedQr ? (
              <>
                <Row>
                  <Col md={6} className="border-end border-secondary mb-4 mb-md-0 text-center">
                    <h6 className="text-warning mb-3 uppercase">🇵🇪 Perú (S/ 25)</h6>
                    <div className="d-grid gap-2">
                      <Button variant="outline-light" onClick={() => handleOpenQr(qrYape, 'Pago con Yape', 'Yape')}>
                        <BsQrCodeScan className="me-2" /> Yape
                      </Button>
                      <Button variant="outline-light" onClick={() => handleOpenQr(qrPlin, 'Pago con Plin', 'Plin')}>
                        <BsQrCodeScan className="me-2" /> Plin
                      </Button>
                    </div>
                  </Col>
                  <Col md={6} className="text-center">
                    <h6 className="text-warning mb-3 uppercase">🌍 Internacional ($9 USD)</h6>
                    <div className="d-grid gap-2">
                      {/* 1. PayPal */}
                      <Button 
                        variant="outline-primary" 
                        href={links.paypal} 
                        target="_blank" 
                        onClick={() => handleExternalLink('PayPal')}
                      >
                        <BsPaypal className="me-2" /> PayPal / Tarjeta
                      </Button>

                      {/* 2. Binance Pay (Segundo lugar) */}
                      <Button variant="outline-warning" onClick={() => handleOpenQr(qrBinance, 'Binance Pay', 'Binance')}>
                        <BsCurrencyExchange className="me-2" /> Binance Pay
                      </Button>

                      {/* 3. Global66 (Tercer lugar) */}
                      <Button 
                        variant="outline-info" 
                        href={links.global66} 
                        target="_blank"
                        onClick={() => handleExternalLink('Global66')}
                      >
                        <BsArrowRightCircle className="me-2" /> Global66
                      </Button>
                    </div>
                  </Col>
                </Row>
                
                <div className="mt-4 pt-3 border-top border-secondary text-center">
                  <p className="text-white-50 mb-2 small">¿Prefieres gestionar todo por correo?</p>
                  <a 
                    href={`mailto:${emailContacto}`} 
                    className="text-warning text-decoration-none d-flex align-items-center justify-content-center gap-2"
                    onClick={() => trackEvent('click_email_modal', 'Email')}
                  >
                    <BsEnvelopeAt /> {emailContacto}
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="qr-container-white p-3 bg-white d-inline-block rounded">
                  <img src={selectedQr.src} alt="QR" style={{ maxWidth: '200px' }} />
                </div>
                <h4 className="text-white mt-3">+51 929 441 018</h4>
                <p className="text-muted small">Envía el comprobante a este número o a nuestro email.</p>
                <Button variant="link" className="text-warning" onClick={() => setSelectedQr(null)}>
                  ← Ver otros métodos de pago
                </Button>
              </div>
            )}
          </Modal.Body>
        </Modal>

        {/* PROCESO VERTICAL */}
        <div className="vertical-steps mt-5">
          <div className="v-step">
            <div className="v-num">1</div>
            <div className="v-text">
              <strong>PAGA TU LECTURA</strong>
              <p>Elige tu método de pago preferido arriba.</p>
            </div>
          </div>
          <div className="v-step">
            <div className="v-num">2</div>
            <div className="v-text">
              <strong>ENVÍA TU DUDA Y COMPROBANTE</strong>
              <p>Escríbeme por WhatsApp o Email con los detalles.</p>
            </div>
          </div>
          <div className="v-step">
            <div className="v-num">3</div>
            <div className="v-text">
              <strong>RECIBE TU VIDEO</strong>
              <p>En menos de 24 horas tendrás tu lectura personalizada.</p>
            </div>
          </div>
        </div>

        {/* BOTONES FINALES */}
        <div className="text-center mt-4 d-flex flex-column flex-md-row justify-content-center gap-3 align-items-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux!%20Ya%20realicé%20el%20pago%20de%20mi%20lectura.`}
              className="btn-whatsapp-floating"
              onClick={() => trackEvent('confirmacion_final_wa', 'WhatsApp')}
            >
              Confirmar por WhatsApp ⚡
            </a>
            
            <a 
              href={`mailto:${emailContacto}?subject=Pago%20Lectura%20Tarot&body=Hola%20Polux,%20adjunto%20mi%20comprobante%20de%20pago.`}
              className="btn-email-simple"
              onClick={() => trackEvent('confirmacion_final_email', 'Email')}
            >
              <BsEnvelopeAt className="me-2" /> Enviar por Email
            </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultasTarot;