import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className='shadow-fr'>
      <Container>
        <Navbar.Brand href="/">MesEcoles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/addecole">Ajouter une école</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
