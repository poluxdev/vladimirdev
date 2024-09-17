import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center">Contacto</h2>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <a
              href="https://www.instagram.com/universal_play/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#E1306C', textDecoration: 'none', fontSize: '1.5rem' }}
            >
              <FaInstagram size={50} />
              <p>Sígueme en Instagram</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;



