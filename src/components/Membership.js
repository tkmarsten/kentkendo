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