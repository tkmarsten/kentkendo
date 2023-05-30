import dojoData from '../data/dojo.json'
import { Stack, Text, Link, Box, Container, Icon, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FiClock } from 'react-icons/fi'

const Setting = () => {
  return (
    <Box as='section'>
      <Icon as={FiClock} boxSize={12} />
      <Container>
        <Box mb='1rem'>
          <Text as='b'>Monday</Text>
          <Box display='flex' justifyContent='space-between'>
            <Text>Beginning</Text>
            <Text>6:30-7:15pm</Text>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Text>Intermediate</Text>
            <Text>7:15-8pm</Text>
          </Box>
        </Box>
        <Box mb='1rem'>
          <Text as='b'>Wednesday</Text>
          <Box display='flex' justifyContent='space-between'>
            <Text>Advanced</Text>
            <Text>6:30-8pm</Text>
          </Box>
        </Box>
      </Container>
      <Link href='https://calendar.google.com/calendar/u/2?cid=a2VudGtlbmRvY2x1YkBnbWFpbC5jb20'>
        <Button>
          Google calendar
        </Button>
      </Link>

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

export default Setting