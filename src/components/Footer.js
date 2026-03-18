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

  const linkMercadoPago = "https://mpago.la/33BgYwg";

  return (
    <footer id="footer" className="footer-section">
      <Container>
        <Row className="text-center align-items-start">
          
          {/* INFORMACIÓN DE MARCA */}
          <Col md={4} className="mb-4 mb-md-0 text-md-start">
            <h5 className="footer-brand">Polux Tarot</h5>
            <p className="footer-copy">&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
            <p className="footer-disclaimer">Lecturas de tarot personalizadas con enfoque evolutivo y confidencial.</p>
          </Col>

          {/* MEDIOS LOCALES PERÚ */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">🇵🇪 Residentes Perú</h5>
            <div className="payment-buttons-container">
              
              <Button 
                id="btn-yape"
                className="btn-footer btn-yape" 
                onClick={() => handleShow(qrYape, '📱 Escanea para pagar con Yape')}
              >
                <BsQrCodeScan /> Pago con Yape
              </Button>

              <Button 
                id="btn-plin"
                className="btn-footer btn-plin" 
                onClick={() => handleShow(qrPlin, '📱 Escanea para pagar con Plin')}
              >
                <BsQrCodeScan /> Pago con Plin
              </Button>

              <Button 
                id="btn-dale"
                className="btn-footer btn-dale" 
                onClick={() => handleShow(qrDale, '📱 Escanea para pagar con DALE')}
              >
                <BsQrCodeScan /> Pago con DALE
              </Button>

            </div>
          </Col>

          {/* INTERNACIONAL */}
          <Col md={4}>
            <h5 className="footer-title">🌍 Internacional</h5>
            <div className="payment-buttons-container">
              
              <Button 
                className="btn-footer btn-mercadopago" 
                as="a" 
                href={linkMercadoPago} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsCreditCard /> Tarjeta de Débito / Crédito
              </Button>
              
              <div className="paises-list">
                Perú • México • Argentina • Chile • Colombia • Uruguay • España • USA
              </div>

              <Button
                className="btn-footer btn-paypal"
                as="a"
                href="https://www.paypal.com/paypalme/vladimirGarciaL/8USD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPaypal /> PayPal ($8 USD)
              </Button>

              <Button 
                id="btn-binance"
                className="btn-footer btn-binance" 
                onClick={() => handleShow(qrBinance, '📱 Escanea para pagar con Binance')}
              >
                <BsCurrencyExchange /> Binance (USDT)
              </Button>

            </div>
          </Col>

        </Row>
      </Container>

      {/* MODAL QR */}
      <Modal show={show} onHide={() => setShow(false)} centered className="qr-modal">
        <Modal.Header closeButton>
          <Modal.Title>{qrTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center p-4">
          <div className="qr-container-bg">
            <img 
              src={qrImage} 
              alt="Código QR de pago" 
              className="qr-img-fluid"
            />
          </div>

          <div className="manual-payment-info mt-4">
            <p className="text-secondary mb-1">O envío manual al número:</p>
            <p className="manual-number">+51 929 441 018</p>
            
            <p className="text-secondary mb-1">Correo electrónico:</p>
            <a href="mailto:eldiariopolux@gmail.com" className="manual-email">
              eldiariopolux@gmail.com
            </a>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-light" onClick={() => setShow(false)}>
            Volver
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;