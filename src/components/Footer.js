import React, { useState } from 'react';
import './Footer.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { BsPaypal, BsQrCodeScan, BsCurrencyExchange, BsCreditCard } from 'react-icons/bs';

import qrBinance from '../images/binance.jpg';
import qrYape from '../images/yape.png';
import qrPlin from '../images/plin.png';
import qrDale from '../images/dale.png';

const Footer = () => {
  const [show, setShow] = useState(false);
  const [qrImage, setQrImage] = useState('');
  const [qrTitle, setQrTitle] = useState('');

  const handleShow = (qrSrc, title) => {
    setQrImage(qrSrc);
    setQrTitle(title);
    setShow(true);
  };

  // NUEVO LINK DE MERCADO PAGO ACTUALIZADO
  const linkMercadoPago = "https://mpago.la/2DPtzuj";

  return (
    <footer id="footer">
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-4 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Polux Tarot - Todos los derechos reservados.</p>
          </Col>

          <Col md={4}>
            <h5>🔮 Medios Locales (Perú) 🔮</h5>
            <div className="payment-buttons d-flex flex-column align-items-center gap-2">
              <Button className="btn-yape" id="btn-yape" onClick={() => handleShow(qrYape, '📱 Escanea con Yape')}>
                <BsQrCodeScan /> Solicita tu lectura con Yape
              </Button>
              <Button className="btn-plin" id="btn-plin" onClick={() => handleShow(qrPlin, '📱 Escanea con Plin')}>
                <BsQrCodeScan /> Solicita tu lectura con Plin
              </Button>
              <Button className="btn-dale" id="btn-dale" onClick={() => handleShow(qrDale, '📱 Escanea con DALE')}>
                <BsQrCodeScan /> Solicita tu lectura con DALE
              </Button>
            </div>
          </Col>

          <Col md={4}>
            <h5>🌎 Tarjetas e Internacional 🌎</h5>
            <div className="payment-buttons d-flex flex-column align-items-center gap-2">
              
              {/* SECCIÓN MERCADO PAGO ACTUALIZADA */}
              <div className="w-100 d-flex flex-column align-items-center">
                <Button 
                  className="btn-mercadopago mb-1" 
                  as="a" 
                  href={linkMercadoPago} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsCreditCard /> Pagar con Tarjeta (Mercado Pago)
                </Button>
                
                <span className="paises-disponibles">
                  🇵🇪 Perú • 🇲🇽 México • 🇦🇷 Argentina • 🇨🇱 Chile
                  <br />
                  🇨🇴 Colombia • 🇺🇾 Uruguay • 🇪🇨 Ecuador
                </span>
              </div>

              <Button
                className="btn-paypal"
                as="a"
                href="https://paypal.me/vladimirGarciaL?country.x=PE&locale.x=es_XC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPaypal /> Solicita tu lectura con PayPal
              </Button>
              
              <Button className="btn-binance" id="btn-binance" onClick={() => handleShow(qrBinance, '📱 Escanea con Binance')}>
                <BsCurrencyExchange /> Solicita tu lectura con Binance
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{qrTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={qrImage} alt="Código QR" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          <p className="mt-3 fw-bold text-white">También puedes enviar el monto manualmente:</p>
          <p className="text-warning fs-5">📱 <strong>+51 929 441 018</strong> (WhatsApp)</p>
          <p className="text-white">
            📧 <a
              href="mailto:eldiariopolux@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning fw-bold"
            >
              eldiariopolux@gmail.com
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;