import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    /* Quitamos bg="dark" para usar nuestro propio estilo en CSS */
    <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          Polux <span className="brand-sub">Tarotista</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase"> {/* ms-auto mueve el menú a la derecha */}
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Esencia</Nav.Link>
            <Nav.Link href="#tarot" className="nav-highlight">Lecturas</Nav.Link> 
            <Nav.Link href="#projects">Herramientas</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;