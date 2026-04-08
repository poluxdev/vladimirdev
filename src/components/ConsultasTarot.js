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

  const products = [
    {
      id: 'personalizada',
      title: 'LECTURA PERSONALIZADA (1 PREGUNTA)',
      subtitle: 'Video con respuesta directa a tu duda',
      price: 12.99,
      hotmart: "https://pay.hotmart.com/A105188223X",
      paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/12.99USD",
      badge: 'POPULAR'
    },
    {
      id: 'general',
      title: '🌟 LECTURA GENERAL COMPLETA',
      subtitle: 'Amor, Dinero, Laboral y Energías',
      price: 19.99,
      hotmart: "https://pay.hotmart.com/M105290076W", // Link actualizado
      paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/19.99USD",
      badge: 'RECOMENDADO'
    }
  ];

  // Inicializamos el estado con el primer producto del array
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const whatsappNumber = "51929441018";
  const email = "eldiariopolux@gmail.com";

  const trackEvent = (action, label, price) => {
    ReactGA.event({
      category: 'Conversión Tarot',
      action,
      label,
      value: price
    });
  };

  const openPaymentModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <section id="tarot" className="tarot-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-5">Elige tu modalidad de lectura</h2>
        
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col md={5} key={product.id} className="mb-4">
              <div className={`price-card-featured mx-auto ${product.id === 'general' ? 'border-gold' : ''}`}>
                <div className="badge-popular">{product.badge}</div>
                <h2 className="card-title-main">{product.title}</h2>
                <p className="card-subtitle-main">{product.subtitle}</p>
                
                <div className="price-display">
                  <span className="currency">$</span>
                  <span className="amount">{product.price}</span>
                  <span className="unit">USD</span>
                </div>

                <ul className="benefits-list-new">
                  {product.id === 'personalizada' ? (
                    <>
                      <li><span>🔮</span> Análisis profundo de 1 pregunta</li>
                      <li><span>🎥</span> Video personalizado</li>
                      <li><span>📩</span> Entrega en menos de 24h</li>
                    </>
                  ) : (
                    <>
                      <li><span>🃏</span> Tirada amplia (Múltiples cartas)</li>
                      <li><span>💖</span> Bloques: Amor, Dinero y Laboral</li>
                      <li><span>✨</span> Lectura de energías actuales</li>
                      <li><span>🎥</span> Video extendido detallado</li>
                    </>
                  )}
                </ul>

                <Button 
                  className="btn-main-cta w-100 mb-2" 
                  onClick={() => openPaymentModal(product)}
                >
                  RESERVAR POR ${product.price}
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        <div className="price-card-featured mx-auto mt-4 text-center" style={{maxWidth: '800px'}}>
            <p className="post-payment-warning">
              ⚠️ <strong>IMPORTANTE:</strong> Después de pagar, envíame tu comprobante, nombre y pregunta (si aplica) por:
              <br /><br />
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hola%20realicé%20el%20pago%20de%20la%20lectura...`} 
                className="btn btn-success btn-sm mx-2"
                target="_blank" rel="noopener noreferrer"
              >
                📲 WhatsApp
              </a>
              <a 
                href={`mailto:${email}`} 
                className="btn btn-outline-light btn-sm mx-2"
              >
                📩 Correo
              </a>
            </p>
        </div>

        <Modal 
          show={showModal} 
          onHide={() => {
            setShowModal(false);
            setSelectedQr(null); // Limpiar el QR al cerrar
          }} 
          centered 
          className="tarot-payment-modal"
          size="lg"
        >
          <Modal.Header closeButton className="bg-dark text-white border-secondary">
            <Modal.Title className="fs-5">Pagar: {selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">

            {!selectedQr ? (
              <Row className="g-4">
                <Col md={6} className="border-end border-secondary">
                  <h6 className="text-warning mb-3">🇵🇪 Perú (Pago Directo)</h6>
                  <div className="d-grid gap-2">
                    <Button variant="outline-info" onClick={() => setSelectedQr({src: qrYape, title: 'Yape'})}>
                      Pagar con Yape
                    </Button>
                    <Button variant="outline-info" onClick={() => setSelectedQr({src: qrPlin, title: 'Plin'})}>
                      Pagar con Plin
                    </Button>
                  </div>
                </Col>

                <Col md={6}>
                  <h6 className="text-warning mb-3">🌍 Internacional ({selectedProduct.price} USD)</h6>
                  <div className="d-grid gap-2">
                    <Button 
                      href={selectedProduct.hotmart} 
                      target="_blank" 
                      className="btn-primary" // Cambiado a clase directa para asegurar visibilidad
                      onClick={() => trackEvent('click_hotmart', selectedProduct.id, selectedProduct.price)}
                    >
                      💳 Tarjeta de Crédito (Hotmart)
                    </Button>
                    <Button 
                      variant="primary"
                      href={selectedProduct.paypal} 
                      target="_blank"
                      onClick={() => trackEvent('click_paypal', selectedProduct.id, selectedProduct.price)}
                    >
                      Paypal
                    </Button>
                    <Button 
                      variant="outline-light"
                      onClick={() => setSelectedQr({src: qrBinance, title: 'Binance'})}
                    >
                      Binance (USDT)
                    </Button>
                  </div>
                </Col>
              </Row>
            ) : (
              <div className="text-center py-4">
                <h5>Escanea para pagar {selectedQr.title}</h5>
                <img 
                  src={selectedQr.src} 
                  alt="QR Pago" 
                  className="my-3 img-fluid rounded"
                  style={{ maxWidth: '250px' }} 
                />
                <h4 className="text-info">+51 929 441 018</h4>
                <Button variant="link" className="text-white" onClick={() => setSelectedQr(null)}>
                  ← Volver a métodos de pago
                </Button>
              </div>
            )}
          </Modal.Body>
        </Modal>

      </div>
    </section>
  );
};

export default ConsultasTarot;