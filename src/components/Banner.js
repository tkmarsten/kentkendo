import dojoData from '../data/dojo.json'
import { Box, SimpleGrid, Image, Heading, Text } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Box as={'section'} className='banner' bg='#252525' color='white' py='2rem' px='1rem'>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        <Box>
          <Image alt="logo" src={`img/` + dojoData.logo} w={100} />
          <Heading as={'h1'} className="mt-4">{dojoData.dojo} Kendo Club</Heading>
        </Box>
        <Box>
          <Text align='start'>
            Originally formed from the Renton Kendo Club, Kent Kendo Club was founded in 2001 and has
            been providing instruction of the traditional Japanese martial art of kendo through the parks
            department. Our club is part of the Pacific Northwest Kendo Federation (PNKF) and the All United States
            Kendo Federation (AUSKF).
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Banner