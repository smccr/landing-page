import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../css/features.css";
import helsinki from '../assets/cities/helsinki.jpg';
import karelia from '../assets/cities/karelia.jpg';
import kharkov from '../assets/cities/kharkov.jpg';
import london from '../assets/cities/london.jpg';
import prague from '../assets/cities/prague.jpg'
import tokyo from '../assets/cities/tokyo.jpg';

const Work = () => (
  <div className="work-container">
    <Container>
      <Row>
        <Col>
          <Col><h1 className="text-uppercase work-title">Lovely work</h1></Col>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="work-card">
            <Card.Img variant="top" src={helsinki} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work-card">
            <Card.Img variant="top" src={karelia} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work-card">
            <Card.Img variant="top" src={kharkov} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="work-card">
            <Card.Img variant="top" src={london} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work-card">
            <Card.Img variant="top" src={prague} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work-card">
            <Card.Img variant="top" src={tokyo} />
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Work;