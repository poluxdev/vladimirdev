import React, { useState } from 'react';
import './Footer.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { BsPaypal, BsQrCodeScan, BsCurrencyExchange, BsArrowRightCircle } from 'react-icons/bs';

import qrBinance from '../images/binance.jpg';
import qrYape from '../images/yape.png';
import qrPlin from '../images/plin.png';

const Footer = () => {
  const [show, setShow] = useState(false);
  const [qrImage, setQrImage] = useState('');
  const [qrTitle, setQrTitle] = useState('');

  const handleShow = (qrSrc, title) => {
    setQrImage(qrSrc);
    setQrTitle(title);
    setShow(true);
  };

  const links = {
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/15USD",
    global66: "https://share.global66.com/VLAGAR674",
  };

  return (
    <footer id="footer" className="footer-section">
      <Container>
        <Row className="text-center align-items-start">
          
          {/* INFORMACIÓN DE MARCA */}
          <Col md={4} className="mb-4 mb-md-0 text-md-start">
            <h5 className="footer-brand">Polux Tarotista</h5>
            <p className="footer-copy">&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
            <p className="footer-disclaimer">
              Lecturas de tarot personalizadas con enfoque evolutivo.  
              Como <strong>tarotista profesional</strong>, brindo claridad y guía confidencial a través de la interpretación de los arcanos.
            </p>
          </Col>

          {/* PERÚ - OPCIONES PRINCIPALES */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">🇵🇪 Residentes Perú</h5>
            <div className="footer-subtext text-white">
              <p><strong>Inversión: S/ 35.00</strong></p>
              <p>Interpretación consciente y respetuosa de tu situación actual.</p>
            </div>
            <div className="payment-buttons-container">
              
              <Button 
                id="btn-yape"
                className="btn-footer btn-yape" 
                onClick={() => handleShow(qrYape, '✨ Pago vía Yape')}
              >
                <BsQrCodeScan /> Yapear S/ 35
              </Button>

              <Button 
                id="btn-plin"
                className="btn-footer btn-plin" 
                onClick={() => handleShow(qrPlin, '✨ Pago vía Plin')}
              >
                <BsQrCodeScan /> Plinear S/ 35
              </Button>

            </div>
          </Col>

          {/* INTERNACIONAL */}
          <Col md={4}>
            <h5 className="footer-title">🌍 Internacional</h5>
            <div className="footer-subtext text-white">
              <p><strong>Inversión: $ 15.00 USD</strong></p>
              <p>Entrega en video HD vía <strong>TransferNow</strong> a todo el mundo.</p>
            </div>

            <div className="payment-buttons-container">
              
              <div className="paises-list">
                México • Argentina • Chile • Colombia • Uruguay • España • USA
              </div>

              <Button
                className="btn-footer btn-global66"
                as="a"
                href={links.global66}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsArrowRightCircle /> Global66 (Latam 0%)
              </Button>

              <Button
                className="btn-footer btn-paypal"
                as="a"
                href={links.paypal}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPaypal /> PayPal / Tarjeta
              </Button>

              <Button 
                id="btn-binance"
                className="btn-footer btn-binance" 
                onClick={() => handleShow(qrBinance, '✨ Pago vía Binance (USDT)')}
              >
                <BsCurrencyExchange /> Binance Pay (USDT)
              </Button>

            </div>
          </Col>

        </Row>
      </Container>

      {/* MODAL DE PAGO */}
      <Modal show={show} onHide={() => setShow(false)} centered className="qr-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-white w-100 text-center">{qrTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center p-4">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <div className="qr-container-bg">
              <img 
                src={qrImage} 
                alt="Código QR de pago" 
                className="qr-img-fluid"
              />
            </div>
          </div>

          <div className="manual-payment-info">
            <p className="text-white mb-1">O envío manual al número:</p>
            <p className="manual-number text-white fw-bold">+51 929 441 018</p>
            
            <p className="text-white mb-1">Correo electrónico:</p>
            <a href="mailto:eldiariopolux@gmail.com" className="manual-email d-block mb-3">
              eldiariopolux@gmail.com
            </a>

            <div className="modal-disclaimer p-3 rounded" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
              <p className="text-white small mb-0">
                Al terminar, envía tu captura por WhatsApp o Email para agendar la entrega de tu video.
              </p>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-0">
          <Button variant="outline-light" className="w-100" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;