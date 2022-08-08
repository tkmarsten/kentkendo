import { Container, Card, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const Dojo = () => {
  return (
    <Container className="col-lg-6 p-4">
      <h3 className="mb-4">Our Dojo</h3>
      <Card>
        <Row>
          <Col md={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.3467417949737!2d-122.24039208418475!3d47.38566711120666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905bfec0e04b6d%3A0xb758707f8c9d2026!2sKent%20Commons%20Community%20Center!5e0!3m2!1sen!2sus!4v1571952895835!5m2!1sen!2sus"
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
                Kent Commons Community Center
              </Card.Title>
              <Card.Text>
                Green River Room<br />
                525 4th Ave N, Kent, WA 98032
              </Card.Text>
              <Button
                variant="primary"
                href="https://www.kentwa.gov/departments/kent-parks/parks-places/kent-commons-community-center"
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