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
      title: 'LECTURA PERSONALIZADA',
      subtitle: '1 Pregunta · Video con respuesta directa',
      price: 19.99,
      hotmart: "https://pay.hotmart.com/A105188223X",
      paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/19.99USD",
      badge: 'POPULAR',
      benefits: [
        { icon: '🔮', text: 'Análisis profundo de tu pregunta' },
        { icon: '🎥', text: 'Video personalizado solo para ti' },
        { icon: '📿', text: 'Me tomo el tiempo para conectar con tu energía — entrega en menos de 24h' },
      ]
    },
    {
      id: 'general',
      title: 'LECTURA GENERAL COMPLETA',
      subtitle: 'Amor · Dinero · Laboral · Energías',
      price: 29.99,
      hotmart: "https://pay.hotmart.com/M105290076W",
      paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/29.99USD",
      badge: 'RECOMENDADO',
      benefits: [
        { icon: '🃏', text: 'Tirada amplia con múltiples cartas' },
        { icon: '💖', text: 'Bloques: Amor, Dinero y Laboral' },
        { icon: '✨', text: 'Lectura de energías actuales' },
        { icon: '🎥', text: 'Video claro y detallado' },
        { icon: '📿', text: 'Me tomo el tiempo para conectar con tu energía — entrega en menos de 24h' },
      ]
    },
    {
      id: 'carta_natal',
      title: 'CARTA NATAL PERSONALIZADA',
      subtitle: 'Planetas · Casas · Aspectos · Mapa de Vida',
      price: 45.00,
      hotmart: "https://pay.hotmart.com/Y107132776S",
      paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/45USD",
      badge: 'PREMIUM',
      benefits: [
        { icon: '🌌', text: 'Estudio de tu mapa astral de nacimiento' },
        { icon: '🪐', text: 'Análisis de Planetas, Casas y Aspectos claves' },
        { icon: '🎯', text: 'Enfoque según las áreas que quieras profundizar' },
        { icon: '🎥', text: 'Video HD con voz en off + Gráfico de tu Carta' },
        { icon: '📿', text: 'Estudio previo y meticuloso de tu mapa astral' },
      ]
    }
  ];

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
    trackEvent('open_payment_modal', product.id, product.price);
  };

  return (
    <section id="tarot" className="tarot-section py-5">
      <div className="container">

        {/* Prueba social — comunidad actualizada */}
        <div className="text-center mb-4">
          <div className="social-proof-bar d-inline-flex align-items-center gap-4 px-4 py-2 rounded-pill">
            <span className="social-proof-item">
              <span className="social-proof-icon">🎵</span>
              <strong>+178K</strong> en TikTok
            </span>
            <span className="social-proof-divider">·</span>
            <span className="social-proof-item">
              <span className="social-proof-icon">📘</span>
              <strong>+104K</strong> en Facebook
            </span>
            <span className="social-proof-divider">·</span>
            <span className="social-proof-item">
              ✨ <strong>+282,000</strong>
            </span>
          </div>
        </div>

        <h2 className="text-center text-white mb-2">Elige tu modalidad de lectura</h2>
        <p className="text-center text-white-50 mb-5">
          
        </p>

        {/* Renderizado adaptado a 3 columnas en pantallas medianas/grandes */}
        <Row className="justify-content-center">
          {products.map((product) => (
            <Col lg={4} md={6} key={product.id} className="mb-4">
              <div className={`price-card-featured mx-auto h-100 d-flex flex-column justify-content-between ${product.id === 'general' ? 'border-gold' : ''}`}>
                <div>
                  <div className="badge-popular">{product.badge}</div>
                  <h2 className="card-title-main">{product.title}</h2>
                  <p className="card-subtitle-main">{product.subtitle}</p>

                  <ul className="benefits-list-new">
                    {product.benefits.map((b, i) => (
                      <li key={i}><span>{b.icon}</span> {b.text}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="price-display">
                    <span className="currency">$</span>
                    <span className="amount">{product.price}</span>
                    <span className="unit">USD</span>
                  </div>

                  <Button
                    className="btn-main-cta w-100 mb-2"
                    onClick={() => openPaymentModal(product)}
                  >
                    RESERVAR POR ${product.price} USD
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Bloque de autoridad + confianza — DETALLES DE DATOS ACTUALIZADOS */}
        <div className="price-card-featured mx-auto mt-4 text-start" style={{ maxWidth: '900px' }}>
          <div className="post-payment-warning p-3">
            <h5 className="text-warning text-center mb-3">⚠️ IMPORTANTE: REQUISITOS DESPUÉS DE TU PAGO</h5>
            <p className="text-white-50 text-center mb-4">
              Para poder canalizar tu energía de forma exacta y preparar tu lectura, envíame tu comprobante junto con tus datos según la opción elegida:
            </p>
            
            <Row className="g-3">
              <Col md={4} className="border-end border-secondary-subtle">
                <h6 className="text-info">🔮 LECTURA PERSONALIZADA</h6>
                <ul className="text-white small list-unstyled ps-2">
                  <li>✅ <strong>Nombre completo</strong> y fecha de nacimiento.</li>
                  <li>✅ <strong>Pregunta concreta</strong> con contexto.</li>
                  <li>✅ <strong>Si involucra a alguien:</strong> Su nombre y fecha/signo.</li>
                </ul>
              </Col>
              
              <Col md={4} className="border-end border-secondary-subtle">
                <h6 className="text-info">🃏 LECTURA GENERAL COMPLETA</h6>
                <ul className="text-white small list-unstyled ps-2">
                  <li>✅ <strong>Nombre completo</strong> y fecha de nacimiento.</li>
                  <li>✅ <strong>Resumen</strong> de tu situación en Amor, Trabajo y Salud.</li>
                  <li>✅ <strong>Si hay pareja/ex:</strong> Su nombre y fecha/signo.</li>
                </ul>
              </Col>

              <Col md={4}>
                <h6 className="text-info">🌌 CARTA NATAL</h6>
                <ul className="text-white small list-unstyled ps-2">
                  <li>✅ <strong>Nombre completo.</strong></li>
                  <li>✅ <strong>Fecha, hora exacta y ciudad/país</strong> de nacimiento.</li>
                  <li>✅ <strong>Tema o área específica</strong> que desees profundizar.</li>
                </ul>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola%20Polux,%20ya%20realicé%20el%20pago%20de%20mi%20lectura.%20Aquí%20te%20adjunto%20mi%20comprobante%20y%20mis%20datos...`}
                className="btn btn-success btn-lg mx-2 px-4 py-2"
                target="_blank" rel="noopener noreferrer"
              >
                📲 Enviar Datos por WhatsApp
              </a>
              <a
                href={`mailto:${email}?subject=Datos%20de%20mi%20Lectura`}
                className="btn btn-outline-light btn-lg mx-2 px-4 py-2"
              >
                📩 Enviar por Correo
              </a>
            </div>
          </div>
        </div>

        {/* Modal de pago */}
        <Modal
          show={showModal}
          onHide={() => {
            setShowModal(false);
            setSelectedQr(null);
          }}
          centered
          className="tarot-payment-modal"
          size="lg"
        >
          <Modal.Header closeButton className="bg-dark text-white border-secondary">
            <Modal.Title className="fs-5">
              Pagar: {selectedProduct.title} — ${selectedProduct.price} USD
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">

            {!selectedQr ? (
              <Row className="g-4">
                <Col md={6} className="border-end border-secondary">
                  <h6 className="text-warning mb-3">🇵🇪 Perú (Pago Directo)</h6>
                  <div className="d-grid gap-2">
                    <Button variant="outline-info" onClick={() => setSelectedQr({ src: qrYape, title: 'Yape' })}>
                      Pagar con Yape
                    </Button>
                    <Button variant="outline-info" onClick={() => setSelectedQr({ src: qrPlin, title: 'Plin' })}>
                      Pagar con Plin
                    </Button>
                  </div>
                </Col>

                <Col md={6}>
                  <h6 className="text-warning mb-3">🌍 Internacional ({selectedProduct.price} USD)</h6>
                  <div className="d-grid gap-2">
                    {selectedProduct.hotmart ? (
                      <Button
                        href={selectedProduct.hotmart}
                        target="_blank"
                        className="btn-primary"
                        onClick={() => trackEvent('click_hotmart', selectedProduct.id, selectedProduct.price)}
                      >
                        💳 Tarjeta de Crédito (Hotmart)
                      </Button>
                    ) : (
                      <Button variant="secondary" disabled>
                        💳 Hotmart (No disponible para esta opción)
                      </Button>
                    )}
                    
                    <Button
                      variant="primary"
                      href={selectedProduct.paypal}
                      target="_blank"
                      onClick={() => trackEvent('click_paypal', selectedProduct.id, selectedProduct.price)}
                    >
                      PayPal
                    </Button>
                    <Button
                      variant="outline-light"
                      onClick={() => setSelectedQr({ src: qrBinance, title: 'Binance' })}
                    >
                      Binance (USDT)
                    </Button>
                  </div>
                </Col>
              </Row>
            ) : (
              <div className="text-center py-4">
                <h5>Escanea para pagar con {selectedQr.title}</h5>
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