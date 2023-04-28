import Hero from '../components/Hero'
import Dojo from '../components/Dojo'
import Intro from '../components/Intro'
import Classes from '../components/Classes'
import Schedule from '../components/Schedule'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Text, Link, Container } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box align='center'>
      <Hero />
      <Container maxW={{ md: '80%' }}>
        <Intro />
        <Classes />
        <Schedule />
        <Dojo />
        <Box py='4rem'>
          <Text>Still have questions? Check out our <Link as={RouterLink} to='/faq' color='red'>FAQ!</Link></Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Home