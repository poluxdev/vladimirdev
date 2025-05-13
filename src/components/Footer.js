import React, { useState } from 'react';
import './Footer.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

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

  return (
    <footer id="footer" className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Portafolio.poluxdev - Todos los derechos reservados.</p>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5 className="mb-3 fw-bold" style={{ fontSize: '1.25rem' }}>🔮 Solicita tu lectura personalizada 🔮</h5>
            <div className="d-flex flex-column align-items-center gap-2">
              <Button 
                id="btn-yape"
                style={{ backgroundColor: "#800080", borderColor: "#800080" }} 
                onClick={() => handleShow(qrYape, '📱➡️📷 Escanea el código desde la app de Yape')}
              >
                Pagar con Yape
              </Button>

              <Button 
                id="btn-plin"
                style={{ backgroundColor: "#00A859", borderColor: "#00A859" }} 
                onClick={() => handleShow(qrPlin, '📱➡️📷 Escanea el código desde la app de Plin')}
              >
                Pagar con Plin
              </Button>
            </div>
          </Col>

          <Col md={4} className="text-center">
            <div className="d-flex flex-column align-items-center gap-2">
              <Button 
                variant="primary" 
                href="https://paypal.me/vladimirGarciaL?country.x=PE&locale.x=es_XC"
                target="_blank"
              >
                Pagar con PayPal
              </Button>

              <Button 
                id="btn-binance"
                variant="warning" 
                onClick={() => handleShow(qrBinance, '📱➡️📷 Escanea el código desde Binance Pay')}
              >
                Pagar con Binance Pay
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
          <img src={qrImage} alt="Código QR" style={{ width: '100%', maxWidth: '300px' }} />
          <p className="mt-3 text-white fw-bold">O también puedes enviar el monto ingresando el número directamente:</p>
          <p className="text-warning fs-5">📱 <strong>+51 929 441 018</strong> (también es WhatsApp)</p>
          <p className="text-white">
            📧 <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=eldiariopolux@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warning fw-bold"
            >
              eldiariopolux@gmail.com
            </a>
          </p>
          <p className="mt-2 text-muted">📷 Escanea el código desde la app o escribe el número manualmente.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
