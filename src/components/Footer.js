import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsWhatsapp, BsEnvelopeAt, BsInstagram } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  const whatsappNumber = "51929441018";
  const emailContacto = "eldiariopolux@gmail.com";

  return (
    <footer id="footer" className="footer-section">
      <Container>
        <Row className="py-5 align-items-center">
          
          {/* COLUMNA 1: MARCA */}
          <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
            <h5 className="footer-brand">Polux Tarotista</h5>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} - Todos los derechos reservados.
            </p>
            <div className="footer-divider d-none d-md-block"></div>
          </Col>

          {/* COLUMNA 2: FILOSOFÍA BREVE */}
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <p className="footer-disclaimer">
              "Analizo símbolos para darte claridad hoy. <br />
              Tú decides tu mañana."
            </p>
            <div className="social-icons-row">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="social-icon">
                <BsWhatsapp />
              </a>
              <a href="https://www.instagram.com/poluxteach/" target="_blank" rel="noreferrer" className="social-icon">
                <BsInstagram />
              </a>
              <a href={`mailto:${emailContacto}`} className="social-icon">
                <BsEnvelopeAt />
              </a>
            </div>
          </Col>

          {/* COLUMNA 3: CONTACTO RÁPIDO */}
          <Col md={4} className="text-center text-md-end">
            <h6 className="footer-contact-title">Contacto Directo</h6>
            <p className="footer-contact-info mb-1">{emailContacto}</p>
            <p className="footer-contact-info">+{whatsappNumber}</p>
            <p className="footer-location small text-white-50">Basado en Perú • Lecturas para el mundo</p>
          </Col>

        </Row>
      </Container>
      
      {/* BARRA FINAL MUY DISCRETA */}
      <div className="footer-bottom-bar text-center py-3">
        <small>Diseñado con enfoque evolutivo por Vladimir</small>
      </div>
    </footer>
  );
};

export default Footer;