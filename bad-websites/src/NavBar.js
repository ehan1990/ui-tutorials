import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Bad Websites</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/admin">Admin</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;