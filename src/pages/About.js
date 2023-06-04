import dojoData from '../data/dojo.json'
import { Box, SimpleGrid, Image, Heading, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <Box align='center'>
      <Box as='section' className='AboutBanner' bg='#252525' color='white'>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          <Box>
            <Image alt="logo" src={`img/` + dojoData.logo} w={100} />
            <Heading as='h1' className="mt-4">{dojoData.name} Kendo Club</Heading>
          </Box>
          <Text align='start'>
            Originally formed from the Renton Kendo Club, Kent Kendo Club was founded in 2001 and has
            been providing instruction of the traditional Japanese martial art of kendo through the parks
            department. Our club is part of the Pacific Northwest Kendo Federation (PNKF) and the All United States
            Kendo Federation (AUSKF).
          </Text>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default About