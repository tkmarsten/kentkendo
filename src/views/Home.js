import Masthead from '../components/Masthead'
import Dojo from '../components/Dojo'
import Intro from '../components/Intro'
import Classes from '../components/Classes'
import Schedule from '../components/Schedule'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Text, Link } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box align='center'>
      <Masthead />
      <Intro />
      <Classes />
      <Schedule />
      <Dojo />
      <Box bg='gray.200' py='4rem'>
        <Text>Still have questions? Check out our <Link as={RouterLink} to='/faq' color='red'>FAQ!</Link></Text>
      </Box>
    </Box>
  )
}

export default Home