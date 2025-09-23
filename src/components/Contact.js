import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import tiktokLogo from '../images/sigueme.png'; // Importa la imagen desde la carpeta src/images
import './Contact.css'; // Importa el archivo CSS

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center">Redes Sociales</h2>
        <Row className="justify-content-center">
          {/* Instagram */}
          <Col md={4} className="text-center">
            <a
              href="https://www.instagram.com/universal_play/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#E1306C', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaInstagram size={50} />
              <p id="instagram-text">Sígueme en Instagram y mantente al tanto del clima astrológico</p>

            </a>
          </Col>

          {/* TikTok */}
          <Col md={4} className="text-center">
            <a
              href="https://www.tiktok.com/@poluxtarotoficial" // Cambia con tu enlace
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000000', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <div
                className="tiktok-icon"
                style={{ backgroundImage: `url(${tiktokLogo})` }} // Usa la imagen importada
              />
              <p id="tiktok-text">Sígueme en TikTok</p>

            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
