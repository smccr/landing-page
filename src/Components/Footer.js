import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { mdiTwitter, mdiFacebook, mdiSkype, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';
import '../css/footer.css';

const Footer = () => (
  <div className="footer-container">
    <Container>
      <Row >
        <Col>
          <p className="m-0">&copy; Copyright 2021 by Lorem ipsum. All Rights Reserved</p>
        </Col>
        <Col>
          <div className="text-end">
            <Icon path={mdiTwitter} size={1} />
            <Icon path={mdiFacebook} size={1} />
            <Icon path={mdiSkype} size={1} />
            <Icon path={mdiLinkedin} size={1} />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;