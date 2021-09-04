import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/welcome.css';

const Welcome = () => (
  <div className="welcome-container">
    <Container>
      <Row>
        <Col md={6} >
          <h1 className="welcome-title text-uppercase">Welcome to Lorem ipsum</h1>
          <p className="welcome-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec eget imperdiet velit. Maecenas eget ante quis purus euismod molestie.
            Nulla molestie dui in pulvinar condimentum</p>
          <Button variant="outline-primary" className="welcome-button">View more</Button>
          <Button variant="outline-primary" className="welcome-button">Video Tour</Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Welcome;