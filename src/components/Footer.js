import React, { useState } from 'react';
import './Footer.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

// Importa las imágenes de los códigos QR
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
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
          </Col>

          {/* Donaciones en Perú */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5 className="animated-text" style={{ cursor: "pointer" }}>
              🔴⚪🔴 Invierte en tu despertar 🔴⚪🔴
            </h5>
            <p className="text-light">Cada aporte es un paso hacia la expansión de tu mente.</p>
            <div className="d-flex justify-content-center gap-2">
              <Button 
                style={{ backgroundColor: "#800080", borderColor: "#800080" }} 
                onClick={() => handleShow(qrYape, '📱➡️📷 Escanea el código desde la app de Yape')}
              >
                Yape
              </Button>

              <Button 
                style={{ backgroundColor: "#00A859", borderColor: "#00A859" }} 
                onClick={() => handleShow(qrPlin, '📱➡️📷 Escanea el código desde la app de Plin')}
              >
                Plin
              </Button>
            </div>
          </Col>

          {/* Donaciones Internacionales */}
          <Col md={4} className="text-center">
            <h5 className="animated-text" style={{ cursor: "pointer" }}>
              🌍 Sé parte del círculo de mentes despiertas 🌍
            </h5>
            <p className="text-light">Tu energía impulsa el cambio. Únete a la transformación.</p>
            <div className="d-flex justify-content-center gap-2">
              <Button 
                variant="primary" 
                href="https://paypal.me/vladimirGarciaL?country.x=PE&locale.x=es_XC"
                target="_blank"
              >
                PayPal
              </Button>

              <Button 
                variant="warning" 
                onClick={() => handleShow(qrBinance, '📱➡️📷 Escanea el código desde Binance Pay')}
              >
                Binance Pay
              </Button>
            </div>
          </Col>
        </Row>

        {/* Mensaje de agradecimiento */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="fw-bold text-warning">
              🚀 Tu apoyo libera mentes y expande el conocimiento.  
              <br />
              👑 Gracias por ser parte de esta evolución. 👑  
            </p>
          </Col>
        </Row>
      </Container>

      {/* Modal para mostrar el QR */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{qrTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={qrImage} alt="Código QR" style={{ width: '100%', maxWidth: '300px' }} />
          <p className="mt-2 text-muted">📱➡️📷 Abre la app correspondiente y escanea el código.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
