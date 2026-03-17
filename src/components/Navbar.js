import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Polux Tarotista</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Sobre Mí</Nav.Link>
          <Nav.Link href="#tarot">Consultas de Tarot</Nav.Link> {/* ✅ Nuevo enlace */}
          <Nav.Link href="#projects">Polux herramientas</Nav.Link>
          <Nav.Link href="#contact">Redes Sociales</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
