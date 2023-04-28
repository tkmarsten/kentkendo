import { Link as RouterLink } from 'react-router-dom'
import { Box, Image, Avatar, Text, Button, Heading, Link, Flex } from '@chakra-ui/react'

const Intro = () => {
  return (
    <Box as='section' id='intro'>
      <Heading>Kent Kendo Club</Heading>
      <Image src='img/logo.gif' w={250} my='1rem' />
      <Box mt='4rem' mb='2rem'>
        <Heading fontSize={24}>Instructors</Heading>
        <Text>
          Our sensei both have over 40 years of teaching experience,
          including coaching the local and regional federation of the PNW.
        </Text>
      </Box>
      <Flex mb='2rem' direction={{ base: 'column', sm: 'row' }} justify='space-around' gap={5}>
        <Box>
          <Avatar bg='gray.500' size='2xl' mb='10px' />
          <Text>Curtis Marsten</Text>
          <Text as='sub'>Renshi 6 Dan</Text>
        </Box>
        <Box>
          <Avatar bg='gray.500' size='2xl' mb='10px' />
          <Text>Vicki Marsten</Text>
          <Text as='sub'>4 Dan</Text>
        </Box>
      </Flex>
      <Link as={RouterLink} to='/about'>
        <Button variant='outline'>About us</Button>
      </Link>
    </Box>
  )
}

export default Intro