import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../css/work.css";
import feature1 from '../assets/features/f1.jpg';
import feature2 from '../assets/features/f2.jpg';
import feature3 from '../assets/features/f3.jpg';

const data = [
  {
    img: feature1,
    title: "Product design: eames chairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet. Vestibulum fringilla tristique risus, at mattis eros commodo et"
  },
  {
    img: feature2,
    title: "Elegant and colorful logos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet. Vestibulum fringilla tristique risus, at mattis eros commodo et"
  },
  {
    img: feature3,
    title: "a showcase of creativity",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet. Vestibulum fringilla tristique risus, at mattis eros commodo et"
  }
]

const Features = () => (
  <div className="features-container">
    <Container>
      <Row>
        <Col>
          <Col><h1 className="text-uppercase features-title">Features</h1></Col>
        </Col>
      </Row>
      <Row>
        {data.map((value, index) => (
          <Col md={4} key={index}>
            <FeatureCard {...value} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

const FeatureCard = ({ img, title, description }) => (
  <Card className="features-card">
    <Card.Img variant="top" src={img} />
    <Card.Body className="features-cardbody">
      <Card.Title className="text-uppercase">{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Features;