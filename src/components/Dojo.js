import { Container, Card, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import dojoData from '../data/dojo.json'

const Dojo = () => {
  return (
    <Container className="col-lg-6 p-4">
      <h3 className="mb-4">Our Dojo</h3>
      <Card>
        <Row>
          <Col md={4}>
            <iframe
              src={dojoData.map}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              title="map">
            </iframe>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>
                {dojoData.facility}
              </Card.Title>
              <Card.Text>
                {dojoData.room} <br />
                {dojoData.address}
              </Card.Text>
              <Button
                variant="primary"
                href={dojoData.website}
                target="_blank"
              >
                Website
              </Button>
            </Card.Body>
          </Col>
        </Row>
        <Card>
          <Card.Header>Monday</Card.Header>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Beginning 6:30-7:15pm</ListGroupItem>
            <ListGroupItem>Continuing 7:15-8pm</ListGroupItem>
          </ListGroup>
          <Card.Header>Wednesday</Card.Header>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Advanced 6:30-8pm</ListGroupItem>
          </ListGroup>
        </Card>
      </Card>
    </Container>
  )
}

export default Dojo