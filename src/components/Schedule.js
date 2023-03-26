import { Box, Icon, Text, Container } from '@chakra-ui/react'
import { FiClock } from 'react-icons/fi'

const Schedule = () => {
  return (
    <Container mt='4rem' mb='2rem'>
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
      <Box>
        <Text as='b'>Wednesday</Text>
        <Box display='flex' justifyContent='space-between'>
          <Text>Advanced</Text>
          <Text>6:30-8pm</Text>
        </Box>
      </Box>
    </Container>
  )
}

export default Schedule