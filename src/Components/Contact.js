import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/contact.css';
import map from '../assets/map.jpg';

const Contact = () => (
  <div className="contact-container">
    <Container>
      <Row>
        <Col>
          <h1 className="contact-title text-uppercase">Stay in touch</h1>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col className="g-0">
          <Image src={map} fluid className="contact-map-img" />
        </Col>
      </Row>
    </Container>
    <Container className="contact-information">
      <Row>
        <Col md={6}>
          <h4>Contact information</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut congue lacus. Aenean sed quam vel nulla laoreet vehicula ut eu augue. Integer sed urna elit. Duis et quam dui.
          </p>
          <p>
            Nulla facilisi. Vivamus commodo dolor sit amet elit euismod, at blandit massa malesuada. Nulla pellentesque mattis feugiat.
          </p>
        </Col>
        <Col md={6}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Your name</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Your email</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Your message</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Group>
              <Button className="button-send mt-3">Send message</Button>
              </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;