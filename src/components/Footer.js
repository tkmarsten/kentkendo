import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-center p-4">
      <Container className="text-white">
        <Row className="d-flex align-items-center">
          <Col sm={6} className="mb-4">
            <img alt="logo" src="img/logo.gif" width="50" height="60" />
          </Col>
          <Col sm={6} className="mb-4">
            <h5>Contact us</h5>
            <a href="mailto:kentkendoclub@gmail.com" className="text-white"><FaEnvelope size="45" /></a>
          </Col>
        </Row>
        <h6>© 2022 Kent Kendo Club</h6>
      </Container>
    </footer>
  )
}

export default Footer