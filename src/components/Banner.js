import dojoData from '../data/dojo.json'
import { Box, Grid, GridItem, Image, Heading, Text } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Box className='banner' bg='#252525' color='white' h='50vh'>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
        <GridItem align='center'>
          <Image alt="logo" src={`img/` + dojoData.logo} style={{ width: '20%' }} />
          <Heading as={'h1'} className="mt-4">{dojoData.dojo} Kendo Club</Heading>
        </GridItem>
        <GridItem>
          <Text>
            Originally formed from the Renton Kendo Club, Kent Kendo Club was founded in 2001 and has
            been providing instruction of the traditional Japanese martial art of Kendo through the parks
            department. Our club is part of the Pacific Northwest Kendo Federation (PNKF) and the All United States
            Kendo Federation (AUSKF).
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Banner