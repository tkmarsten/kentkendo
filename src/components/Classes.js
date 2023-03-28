import { Link as RouterLink } from 'react-router-dom'
import { Text, Box, Button, Link } from '@chakra-ui/react'

const Classes = () => {
  return (
    <Box>
      <Text mt='4rem'>
        We offer classes for all skill ranges.
        Anyone regardless of background may start in our beginning class and progress to the advanced.
      </Text>
      <Link as={RouterLink} to='/class'>
        <Button mt='1rem' mb='2rem'>Class curriculum</Button>
      </Link>
      <Box className='class-banner'>
        <Box className='banner1' />
        <Box className='banner-text'>
          <Text mb='1rem'>Beginning</Text>
          <Text>We take beginners on a quarterly basis.</Text>
        </Box>
      </Box>
      <Box className='class-banner'>
        <Box className='banner2' />
        <Box className='banner-text'>
          <Text mb='1rem'>Intermediate</Text>
          <Text>Beginners who complete their first quarter may move on to the intermediate class.</Text>
        </Box>
      </Box>
      <Box className='class-banner'>
        <Box className='banner3' />
        <Box className='banner-text'>
          <Text mb='1rem'>Advanced</Text>
          <Text>For all that have progressed to wearing armor.</Text>
        </Box>
      </Box>
    </Box >
  )
}

export default Classes