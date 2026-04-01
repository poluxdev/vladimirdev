import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { BsPaypal, BsQrCodeScan, BsCurrencyExchange, BsArrowRightCircle } from 'react-icons/bs';

// Importa tus imágenes aquí
import qrBinance from '../images/binance.jpg';
import qrYape from '../images/yape.png';
import qrPlin from '../images/plin.png';

const PaymentModal = ({ show, onHide }) => {
  const [selectedQr, setSelectedQr] = useState(null);

  const links = {
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/9USD",
    global66: "https://share.global66.com/VLAGAR674",
  };

  return (
    <Modal show={show} onHide={() => { setSelectedQr(null); onHide(); }} centered size="lg" className="tarot-payment-modal">
      <Modal.Header closeButton className="border-0 bg-dark text-white">
        <Modal.Title className="w-100 text-center font-playfair">
          {selectedQr ? selectedQr.title : "Selecciona tu método de pago"}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="bg-dark p-4">
        {!selectedQr ? (
          <Row>
            {/* COLUMNA PERÚ */}
            <Col md={6} className="border-end border-secondary mb-4 mb-md-0">
              <h5 className="text-warning text-center mb-3">🇵🇪 Perú (S/ 25)</h5>
              <div className="d-grid gap-2">
                <Button variant="outline-info" className="py-3" onClick={() => setSelectedQr({src: qrYape, title: 'Pago vía Yape'})}>
                  <BsQrCodeScan /> Yape
                </Button>
                <Button variant="outline-info" className="py-3" onClick={() => setSelectedQr({src: qrPlin, title: 'Pago vía Plin'})}>
                  <BsQrCodeScan /> Plin
                </Button>
              </div>
            </Col>

            {/* COLUMNA INTERNACIONAL */}
            <Col md={6}>
              <h5 className="text-warning text-center mb-3">🌍 Internacional ($9 USD)</h5>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" className="py-3" href={links.paypal} target="_blank">
                  <BsPaypal /> PayPal / Tarjeta
                </Button>
                <Button variant="outline-light" className="py-3" href={links.global66} target="_blank">
                  <BsArrowRightCircle /> Global66
                </Button>
                <Button variant="outline-warning" className="py-3" onClick={() => setSelectedQr({src: qrBinance, title: 'Pago vía Binance Pay'})}>
                  <BsCurrencyExchange /> Binance Pay
                </Button>
              </div>
            </Col>
          </Row>
        ) : (
          /* VISTA DEL QR SELECCIONADO */
          <div className="text-center">
            <img src={selectedQr.src} alt="QR Pago" className="img-fluid rounded mb-3" style={{maxWidth: '250px'}} />
            <p className="text-white">Escanea para pagar o usa el número:</p>
            <h4 className="text-info">+51 929 441 018</h4>
            <Button variant="link" className="text-muted" onClick={() => setSelectedQr(null)}>
              ← Volver a métodos de pago
            </Button>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="bg-dark border-0 justify-content-center">
         <p className="text-muted small">Una vez realizado el pago, envía tu comprobante por WhatsApp.</p>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;