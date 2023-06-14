import membershipData from '../data/membership.json'
import { Box, Heading, Link, Grid, GridItem, Text, Stack, Button } from '@chakra-ui/react'

const Registration = () => {
  return (
    <Box as='section' textAlign='center'>
      <Grid gap={10}>
        {membershipData.map((section) => (
          <GridItem>
            <Heading fontSize={16}>{section.group}</Heading>
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
    </Box>
  )
}

export default Registration