import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { mdiCog, mdiLeadPencil, mdiCellphone, mdiClockTimeFourOutline } from '@mdi/js';
import Icon from '@mdi/react';
import '../css/workDescription.css';

const data = [
  {
    icon: mdiCog,
    title: "Easy theme setup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  },
  {
    icon: mdiLeadPencil,
    title: "Pixer perfect design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  },
  {
    icon: mdiCellphone,
    title: "Responsive display",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  },
  {
    icon: mdiClockTimeFourOutline,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  },
  {
    icon: mdiCog,
    title: "Easy theme setup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  },
  {
    icon: mdiLeadPencil,
    title: "Pixer perfect design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  },
  {
    icon: mdiCellphone,
    title: "Responsive display",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  },
  {
    icon: mdiClockTimeFourOutline,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lectus felis, vitae egestas felis tincidunt sit amet."
  }
];

const WorkDescription = () => (
  <div className="workdescription-container">
    <Container>
      <Row>
        <Col><h1>What we do</h1></Col>
      </Row>
      <Row>
        {data.map((value, index) => (
          <Col md="3" key={index}>
            <CardWork {...value} />
          </Col>)
        )}
      </Row>
    </Container>
  </div>
);

const CardWork = ({ icon, title, description }) => (
  <Card className="workdescription-card">
    <Card.Body>
      <Card.Title className="icon-card"><Icon path={icon} size={2} /></Card.Title>
      <Card.Title>{title}</Card.Title>
      <Card.Text className="text-wrap">{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default WorkDescription;