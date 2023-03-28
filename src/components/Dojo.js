import dojoData from '../data/dojo.json'
import { Container, Stack, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Dojo = () => {
  return (
    <Container mb='4rem'>
      <iframe
        src={dojoData.map}
        title="map">
      </iframe>
      <Stack align='center' mt='1rem'>
        <Link href={dojoData.website} isExternal>{dojoData.facility} <ExternalLinkIcon mx='2px' /></Link>
        <Text>{dojoData.room}</Text>
        <Text>{dojoData.address}</Text>
      </Stack>
    </Container>
  )
}

export default Dojo