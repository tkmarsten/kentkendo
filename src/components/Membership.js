import membershipData from '../data/membership.json'
import { Container, Heading, Stack, Text, Button, Link, Grid, GridItem } from '@chakra-ui/react'

const Membership = () => {

  return (
    <Container my='4rem'>
      <Heading as={'h3'} mb='2rem'>Membership</Heading>
      <Grid gap={10}>
        {membershipData.map((section) => (
          <GridItem>
            <Text>{section.group}</Text>
            <Text>{section.age}</Text>
            <Stack direction={{ base: 'column', md: 'row' }} justify='center' mt='1rem' key={section.group}>
              {section.classes.map((classes) => (
                <Link href={classes.url} isExternal key={classes.section}>
                  <Button>
                    {classes.section}
                  </Button>
                </Link>
              ))}
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default Membership

/*
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
*/