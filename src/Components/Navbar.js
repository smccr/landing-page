import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../css/navbar.css'

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
    <Container className="navbar-container">
      <Navbar.Brand href="#home" className="navbar-brand">My brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="navlink">Home</Nav.Link>
          <Nav.Link href="#link" className="navlink">About</Nav.Link>
          <Nav.Link href="#link" className="navlink">Work</Nav.Link>
          <Nav.Link href="#link" className="navlink">Team</Nav.Link>
          <Nav.Link href="#link" className="navlink">Services</Nav.Link>
          <Nav.Link href="#link" className="navlink">Features</Nav.Link>
          <Nav.Link href="#link" className="navlink">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );

export default NavbarComponent;