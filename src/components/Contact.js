import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTelegramPlane, FaYoutube, FaFacebook } from 'react-icons/fa';
import tiktokLogo from '../images/sigueme.png';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5 contact-section">
      <Container>
        <h2 className="text-center mb-5">Redes Sociales</h2>

        <Row className="justify-content-center">
          {/* Instagram */}
          <Col md={4} lg={2} className="text-center mb-4">
            <a
              href="https://www.instagram.com/poluxteach/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#E1306C', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaInstagram size={50} />
              <p id="instagram-text">Instagram</p>
            </a>
          </Col>

          {/* TikTok - Estructura original intacta */}
          <Col md={4} lg={2} className="text-center mb-4">
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
              <p id="tiktok-text">TikTok</p>
            </a>
          </Col>

          {/* YouTube - NUEVO */}
          <Col md={4} lg={2} className="text-center mb-4">
            <a
              href="https://www.youtube.com/@PoluxTarotistaOficial"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FF0000', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaYoutube size={50} />
              <p id="youtube-text">YouTube</p>
            </a>
          </Col>

          {/* Facebook - NUEVO */}
          <Col md={4} lg={2} className="text-center mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61576273196027"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1877F2', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaFacebook size={50} />
              <p id="facebook-text">Facebook</p>
            </a>
          </Col>

          {/* Telegram */}
          <Col md={4} lg={2} className="text-center mb-4">
            <a
              href="https://t.me/poluxtarot"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#229ED9', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaTelegramPlane size={50} />
              <p id="telegram-text">Telegram</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;