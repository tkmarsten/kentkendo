import { Heading, Link, Container, Text, Button } from '@chakra-ui/react'

import BgImage from './BgImage'

const Hero = () => {
  return (
    <header>
      <BgImage image='banner.jpg'>
        <Container>
          <Heading fontSize='clamp(2.5rem, 6vw, 4rem)'>Start your kendo journey here</Heading>
          <Text my='2rem'>Teaching the traditional Japanese martial art of kendo through the Kent parks department since 2001.</Text>
          <Link mt={4} href='#intro'>
            <Button color='black'>
              Learn more
            </Button>
          </Link>
        </Container>
      </BgImage>
    </header>
  )
}

export default Hero