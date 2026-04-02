import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { BsPaypal, BsQrCodeScan, BsCurrencyExchange, BsArrowRightCircle } from 'react-icons/bs';

import qrBinance from '../images/binance.jpg';
import qrYape from '../images/yape.png';
import qrPlin from '../images/plin.png';

const PaymentModal = ({ show, onHide }) => {
  const [selectedQr, setSelectedQr] = useState(null);

  const links = {
    hotmart: "https://go.hotmart.com/A105188223X",
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/12.99USD",
    global66: "https://share.global66.com/VLAGAR674",
  };

  return (
    <Modal show={show} onHide={() => { setSelectedQr(null); onHide(); }} centered size="lg" className="tarot-payment-modal">
      
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          {selectedQr ? selectedQr.title : "Selecciona tu método de pago"}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>

        {!selectedQr ? (
          <Row>

            <Col md={6}>
              <h5 className="text-center">🇵🇪 Perú ($12.99)</h5>

              <Button onClick={() => setSelectedQr({src: qrYape, title: 'Yape'})}>
                <BsQrCodeScan /> Yape
              </Button>

              <Button onClick={() => setSelectedQr({src: qrPlin, title: 'Plin'})}>
                <BsQrCodeScan /> Plin
              </Button>
            </Col>

            <Col md={6}>
              <h5 className="text-center">🌍 Internacional ($12.99)</h5>

              <Button href={links.hotmart} target="_blank" rel="noopener noreferrer">
                💳 Tarjeta (Hotmart)
              </Button>

              <Button href={links.paypal} target="_blank" rel="noopener noreferrer">
                <BsPaypal /> PayPal
              </Button>

              <Button href={links.global66} target="_blank" rel="noopener noreferrer">
                <BsArrowRightCircle /> Global66
              </Button>

              <Button onClick={() => setSelectedQr({src: qrBinance, title: 'Binance'})}>
                <BsCurrencyExchange /> Binance
              </Button>
            </Col>

          </Row>
        ) : (
          <div className="text-center">
            <img src={selectedQr.src} alt="QR" style={{ maxWidth: '250px' }} />
            <h4>+51 929 441 018</h4>
            <Button onClick={() => setSelectedQr(null)}>Volver</Button>
          </div>
        )}

      </Modal.Body>

      <Modal.Footer className="justify-content-center">
        <p>Envía tu comprobante por WhatsApp</p>
      </Modal.Footer>

    </Modal>
  );
};

export default PaymentModal;