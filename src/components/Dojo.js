import dojoData from '../data/dojo.json'
import { Container, Stack, Text, Button, Link } from '@chakra-ui/react'

const Dojo = () => {
  return (
    <Container mb='4rem'>
      <iframe
        src={dojoData.map}
        title="map">
      </iframe>
      <Stack align='center' mt='1rem'>
        <Text>{dojoData.facility}</Text>
        <Text>{dojoData.room}</Text>
        <Text>{dojoData.address}</Text>
        <Link href={dojoData.website} isExternal><Button>Website</Button></Link>
      </Stack>
    </Container>
  )
}

export default Dojo