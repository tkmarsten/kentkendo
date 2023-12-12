import { Image, SimpleGrid, Heading, Text, Box } from '@chakra-ui/react'

const Location = () => {
  return (
    <section>
      <SimpleGrid columns={{ base: 1, lg: 2 }} className='full-width'>
        <Image src='https://www.kentwa.gov/home/showpublishedimage/18301/637789587381300000' filter="grayscale(0)"
          objectFit="cover" width="100%" height="300px" />
        <Box p="18px" align='start' backgroundColor='gray.200'>
          <Heading as={'h4'}>
            Our dojo
          </Heading>
          <Text>
            Located across the street from the ShoWare center and Kent Station,
            our club was established at the Kent Commons Community Center as a class
            under the parks department since 2001.
          </Text>
        </Box>
      </SimpleGrid>
    </section>
  )
}

export default Location