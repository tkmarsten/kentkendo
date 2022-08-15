import { Row, Col, Card, ListGroup, Container, Button } from 'react-bootstrap'
import membershipData from '../data/membership.json'

const Membership = () => {

  return (
    <Container className="col-lg-6 p-4">
      <h3 className="mb-4">Membership</h3>
      <Row className="row-cols-1 g-2">
        {membershipData.map((section) => (
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{section.group}</Card.Title>
                <Card.Subtitle className="text-muted">{section.age}</Card.Subtitle>
                <ListGroup variant="flush">
                  {section.classes.map((classes) => (
                    <ListGroup.Item>
                      <Button variant="primary"
                        href={classes.url}
                        target="_blank">
                        {classes.section}
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Membership