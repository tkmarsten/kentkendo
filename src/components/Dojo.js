import dojoData from '../data/dojo.json'
import { Stack, Text, Link, Box, Container } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Dojo = () => {
  return (
    <Box as='section'>
      <Container>
        <iframe
          src={dojoData.map}
          title='map'
        />
      </Container>
      <Stack align='center' mt='1rem'>
        <Link href={dojoData.website} isExternal>{dojoData.facility} <ExternalLinkIcon mx='2px' /></Link>
        <Text>{dojoData.room}</Text>
        <Text>{dojoData.address}</Text>
      </Stack>
    </Box>
  )
}

export default Dojo