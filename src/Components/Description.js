import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/description.css';

const Description = () => (
    <Container className="description-container">
      <Row>
        <Col>
          <h1 className="title">We are modest</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at vulputate risus, ac tristique justo.
            Donec id dignissim risus. In eleifend, diam a ullamcorper porttitor, ligula odio luctus elit,
            sit amet sodales purus leo vitae eros. Etiam at lorem vitae neque sagittis imperdiet ac vehicula arcu.
            Suspendisse potenti. Praesent sed lectus mi. In enim mi, bibendum quis interdum eu, pretium in metus. Vestibulum
          </p>

          <p className="text-muted">
            Fusce dapibus velit lacus, ut gravida nibh malesuada eu. Morbi ornare vulputate pellentesque.
            Suspendisse sit amet orci eu justo consequat molestie. Duis ac metus sit amet urna posuere sodales vel eget ligula.
            Morbi faucibus elit eu massa venenatis ultricies. Mauris blandit, libero sit amet hendrerit blandit, tellus nulla
            pretium neque, a rutrum lectus arcu scelerisque urna. Nulla egestas ultrices leo in facilisis.
          </p>
        </Col>
        <Col>
          <Row>
            <Col md={2}>
              <p className="paragraph-number">01</p>
            </Col>
            <Col>
              <h5 className="text-uppercase">Dedication to the customers</h5>
              <p className="text-muted">
                Etiam lacinia ornare eros, eu dictum ex molestie sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={2}>
              <p className="paragraph-number">02</p>
            </Col>
            <Col>
              <h5 className="text-uppercase">Working closely with our clients</h5>
              <p className="text-muted">
                Ut tempus mollis faucibus. Vestibulum lobortis nec massa non ultricies. Aenean eget tempus dolor. Nullam volutpat laoreet justo eu iaculis
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={2}>
              <p className="paragraph-number">03</p>
            </Col>
            <Col>
              <h5 className="text-uppercase">Increase happiness</h5>
              <p className="text-muted">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quis turpis id est imperdiet porta non sit amet
              </p>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
  
export default Description;