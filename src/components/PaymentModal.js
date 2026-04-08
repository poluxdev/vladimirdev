import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { BsPaypal, BsQrCodeScan, BsCurrencyExchange, BsArrowRightCircle } from 'react-icons/bs';

import qrBinance from '../images/binance.jpg';
import qrYape from '../images/yape.png';
import qrPlin from '../images/plin.png';

// Agregamos 'product' como prop para recibir la info del producto elegido
const PaymentModal = ({ show, onHide, product }) => {
  const [selectedQr, setSelectedQr] = useState(null);

  // Si no hay producto seleccionado aún, usamos valores por defecto para evitar errores
  const currentProduct = product || {
    title: "Lectura de Tarot",
    price: "12.99",
    hotmart: "https://go.hotmart.com/A105188223X",
    paypal: "https://www.paypal.com/paypalme/vladimirGarciaL/12.99USD"
  };

  const links = {
    hotmart: currentProduct.hotmart,
    paypal: currentProduct.paypal,
    global66: "https://share.global66.com/VLAGAR674",
  };

  return (
    <Modal 
      show={show} 
      onHide={() => { setSelectedQr(null); onHide(); }} 
      centered 
      size="lg" 
      className="tarot-payment-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">
          {selectedQr ? selectedQr.title : `Pagar: ${currentProduct.title}`}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        {!selectedQr ? (
          <Row>
            <Col md={6} className="mb-4 mb-md-0 border-end">
              <h5 className="text-center mb-3">🇵🇪 Perú (${currentProduct.price})</h5>
              <div className="d-grid gap-2">
                <Button variant="outline-dark" onClick={() => setSelectedQr({src: qrYape, title: 'Yape'})}>
                  <BsQrCodeScan /> Yape
                </Button>

                <Button variant="outline-dark" onClick={() => setSelectedQr({src: qrPlin, title: 'Plin'})}>
                  <BsQrCodeScan /> Plin
                </Button>
                <p className="small text-muted text-center mt-2">
                  * Pago en Soles al cambio del día
                </p>
              </div>
            </Col>

            <Col md={6}>
              <h5 className="text-center mb-3">🌍 Internacional (${currentProduct.price} USD)</h5>
              <div className="d-grid gap-2">
                <Button 
                  href={links.hotmart} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  💳 Tarjeta (Hotmart)
                </Button>

                <Button 
                  href={links.paypal} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="outline-primary"
                >
                  <BsPaypal /> PayPal
                </Button>

                <Button 
                  href={links.global66} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="outline-secondary"
                >
                  <BsArrowRightCircle /> Global66
                </Button>

                <Button 
                  onClick={() => setSelectedQr({src: qrBinance, title: 'Binance'})}
                  variant="outline-warning"
                >
                  <BsCurrencyExchange /> Binance
                </Button>
              </div>
            </Col>
          </Row>
        ) : (
          <div className="text-center">
            <h6 className="mb-3">Escanea el código para realizar el pago</h6>
            <img src={selectedQr.src} alt="QR" className="img-fluid rounded shadow-sm mb-3" style={{ maxWidth: '250px' }} />
            <h4>+51 929 441 018</h4>
            <p className="text-muted small">Titular: Vladimir Garcia</p>
            <Button variant="link" onClick={() => setSelectedQr(null)}>Volver a métodos de pago</Button>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="justify-content-center bg-light">
        <p className="mb-0"><strong>Importante:</strong> Envía tu comprobante por WhatsApp para agendar tu video.</p>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;