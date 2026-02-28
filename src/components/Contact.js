import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import tiktokLogo from '../images/sigueme.png';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center">Redes Sociales</h2>

        <Row className="justify-content-center">

          {/* Instagram */}
          <Col md={4} className="text-center mb-4">
            <a
              href="https://www.instagram.com/poluxteach/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#E1306C', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaInstagram size={50} />
              <p id="instagram-text">
                Sígueme en Instagram y mantente al tanto del clima astrológico
              </p>
            </a>
          </Col>

          {/* TikTok */}
          <Col md={4} className="text-center mb-4">
            <a
              href="https://www.tiktok.com/@poluxtarotoficial"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000000', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <div
                className="tiktok-icon"
                style={{ backgroundImage: `url(${tiktokLogo})` }}
              />
              <p id="tiktok-text">
                Contenido diario en TikTok
              </p>
            </a>
          </Col>

          {/* Telegram */}
          <Col md={4} className="text-center mb-4">
            <a
              href="https://t.me/poluxtarot"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#229ED9', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaTelegramPlane size={50} />
              <p id="telegram-text">
                Únete a mi comunidad privada de Telegram 🔮  
                <br />
                <small>Mensajes, avisos y lecturas que no publico en redes</small>
              </p>
            </a>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;