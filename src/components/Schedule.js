import { Box, Icon, Text, Container, Link, Button } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

const Schedule = () => {
  return (
    <Container my='4rem'>
      <Icon as={FiClock} boxSize={10} />
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
      <Link href='https://calendar.google.com/calendar/u/2?cid=a2VudGtlbmRvY2x1YkBnbWFpbC5jb20'>
        <Button>
          Google calendar
        </Button>
      </Link>
    </Container>
  )
}

export default Schedule