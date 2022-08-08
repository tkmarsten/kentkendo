import { Container, Row, Col } from 'react-bootstrap'

const Masthead = () => {
  return (
    <header className="masthead text-white">
      <Container className="text-center">
        <Row>
          <Col>
            <h1>Kent Kendo Club</h1>
            <h1>剣道</h1>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Masthead