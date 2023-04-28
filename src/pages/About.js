import Banner from '../components/AboutBanner'
import Affiliations from '../components/Affiliations'
import { Box } from '@chakra-ui/react'

const About = () => {
  return (
    <Box align='center'>
      <Banner />
      <Affiliations />
    </Box>
  )
}

export default About