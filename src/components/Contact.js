import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTelegramPlane, FaYoutube, FaFacebook } from 'react-icons/fa';
import tiktokLogo from '../images/sigueme.png';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-5 contact-section">
      <Container>
        <h2 className="section-title text-center mb-5">Conecta con mi Energía</h2>

        <Row className="justify-content-center align-items-center">
          
          {/* Instagram */}
          <Col xs={6} md={4} lg={2} className="text-center mb-4">
            <a href="https://www.instagram.com/poluxteach/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram className="social-icon-fa" />
              <p>Instagram</p>
            </a>
          </Col>

          {/* TikTok */}
          <Col xs={6} md={4} lg={2} className="text-center mb-4">
            <a href="https://www.tiktok.com/@poluxtarotoficial" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
              <div className="tiktok-icon-custom" style={{ backgroundImage: `url(${tiktokLogo})` }} />
              <p>TikTok</p>
            </a>
          </Col>

          {/* YouTube */}
          <Col xs={6} md={4} lg={2} className="text-center mb-4">
            <a href="https://www.youtube.com/@PoluxTarotistaOficial" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube className="social-icon-fa" />
              <p>YouTube</p>
            </a>
          </Col>

          {/* Facebook */}
          <Col xs={6} md={4} lg={2} className="text-center mb-4">
            <a href="https://www.facebook.com/profile.php?id=61576273196027" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FaFacebook className="social-icon-fa" />
              <p>Facebook</p>
            </a>
          </Col>

          {/* Telegram */}
          <Col xs={6} md={4} lg={2} className="text-center mb-4">
            <a href="https://t.me/poluxtarot" target="_blank" rel="noopener noreferrer" className="social-link telegram">
              <FaTelegramPlane className="social-icon-fa" />
              <p>Telegram</p>
            </a>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;