import { Container, Row, Col } from 'react-bootstrap'

const Affiliations = () => {
  return (
    <Container className="p-4">
      <h3 className="mb-4">Affiliations</h3>
      <Row className="row-cols-1">
        <Col md={4} className="mb-4">
          <a href="https://www.auskf.org/home" target="_blank" rel="noreferrer">
            <img alt="auskf" src="img/auskf.jpg" class="affimg" />
          </a>
          <h6 class="pt-3">All United States Kendo Federation</h6>
        </Col>
        <Col md={4} className="mb-4">
          <a href="https://www.auskf.org/home" target="_blank" rel="noreferrer">
            <img alt="auskf" src="img/pnkf.jpg" class="affimg" />
          </a>
          <h6 class="pt-3">Pacific Northwest Kendo Federation</h6>
        </Col>
        <Col md={4}>
          <a href="https://www.auskf.org/home" target="_blank" rel="noreferrer">
            <img alt="auskf" src="img/citylogo.png" class="affimg" />
          </a>
          <h6 class="pt-3">Federal Way Kendo Club</h6>
        </Col>
      </Row>
    </Container>
  )
}

export default Affiliations