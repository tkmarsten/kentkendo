import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, Image, Avatar, Text, Button, Heading, Link, Stack } from '@chakra-ui/react'

const Intro = () => {
  return (
    <Container className='full-bleed' py={'4rem'} id='intro'>
      <Stack direction={{ base: 'column', md: 'row' }} align='center' mb='2rem'>
        <Image src='img/logo.gif' w={250} />
        <Box>
          <Heading>Kent Kendo Club</Heading>
          <Text>Teaching the traditional Japanese martial art of kendo through the Kent parks department since 2001.</Text>
        </Box>
      </Stack>
      <Box mb='2rem'>
        <Heading fontSize={24}>Sensei</Heading>
        <Text>Our teachers both have over 40 years of teaching experience.</Text>
        <Stack direction={{ base: 'column', md: 'row' }} align='center' justify='space-around' mt='2rem' gap={10}>
          <Box>
            <Avatar bg='gray.500' size='2xl' />
            <Text>Curtis Marsten</Text>
            <Text as='sub'>Renshi 6 Dan</Text>
          </Box>
          <Box>
            <Avatar bg='gray.500' size='2xl' />
            <Text>Vicki Marsten</Text>
            <Text as='sub'>4 Dan</Text>
          </Box>
        </Stack>
      </Box>
      <Link as={RouterLink} to='/about'>
        <Button variant='outline'>Learn more about us</Button>
      </Link>
    </Container>
  )
}

export default Intro