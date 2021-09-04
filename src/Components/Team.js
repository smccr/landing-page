import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { mdiTwitter, mdiFacebook, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';
import '../css/team.css';
import img1 from '../assets/team/1.jpg';
import img2 from '../assets/team/2.jpg';
import img3 from '../assets/team/3.jpg';
import img4 from '../assets/team/4.jpg';

const team = [
  {
    name: 'Roman Penz',
    position: 'CEO and Founder',
    img: img1
  },
  {
    name: 'Gretchen Gerber',
    position: 'Head of Development',
    img: img2
  },
  {
    name: 'Brent Caldwell',
    position: 'Graphic Designer',
    img: img3
  },
  {
    name: 'Christin Hoffman',
    position: 'Client Service Director',
    img: img4
  }
];

// const Team = () => (
//   <div className="team-container">
//     <Container >
//       <h1 className="team-title">Meet the team</h1>
//       <div className="d-flex d-flex flex-xl-row justify-content-xl-between flex-column">
//         {team.map((element, index) => <CardTeam key={index} {...element} />)}
//       </div>
//     </Container>
//   </div>
// );

const Team = () => (
  <div className="team-container">
    <Container>
      <h1 className="team-title">Meet the team</h1>
      <Row>
        {team.map((element, index) => <Col md={3} key={index}><CardTeam {...element} /></Col>)}
      </Row>
      <div>

      </div>
    </Container>
  </div>
);

const CardTeam = ({ img, name, position }) => (
  <Card className="team-card">
    <Card.Img variant="top" src={img} className="team-img" />
    <div className="social">
      <Icon path={mdiTwitter} size={1.5} />
      <Icon path={mdiFacebook} size={1.5} />
      <Icon path={mdiLinkedin} size={1.5} />
    </div>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {position}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Team;