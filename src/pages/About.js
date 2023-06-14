import dojoData from '../data/dojo.json'
import AffImage from '../components/AffImage'
import { Box, SimpleGrid, Image, Heading, Text, Container } from '@chakra-ui/react'

const About = () => {
  return (
    <Box align='center'>
      <SimpleGrid as='section' bg='#252525' color='white' h='95vh' columns={{ base: 1, md: 2 }} gap={4} alignItems='center'>
        <Image alt="logo" src={`img/` + dojoData.logo} w={250} m='auto' />
        <Heading as='h1' fontSize='clamp(2.5rem, 6vw, 4rem)'>{dojoData.name} Kendo Club</Heading>
      </SimpleGrid>
      <Container className='About' minWidth='min(100% - 30px, 80%)'>
        <Text align='start'>
          Originally formed from the Renton Kendo Club, Kent Kendo Club was founded in 2001 and has
          been providing instruction of the traditional Japanese martial art of kendo through the parks
          department. Our club is affliated with another local dojo, Federal Way Kendo Club, as well as
          (PNKF) with regional and national kendo federations. We are apart of the Pacific Northwest Kendo Federation
          that governs the dojo in the PNW area including Alaska, Idaho, Oregon, and Washington. The PNKF
          is governed by the All United States Kendo Federation, which is apart of the International Federation of Kendo.
        </Text>
        <SimpleGrid as='section' columns={{ base: 1, md: 3 }}>
          <AffImage img='citylogo.png' url='https://www.federalwaykendo.org/'
            caption='federal way logo' heading='Federal Way Kendo Club' />
          <AffImage img='pnkf.jpg' url='https://www.pnkf.org/'
            caption='pnkf logo' heading='Pacific Northwest Kendo Federation' />
          <AffImage img='auskf.jpg' url='https://www.auskf.org/'
            caption='auskf logo' heading='All United States Kendo Federation' />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default About