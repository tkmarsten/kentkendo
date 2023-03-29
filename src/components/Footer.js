import dojoData from '../data/dojo.json'
import { Container, Image, Heading, Icon, Link, Text, Box, Stack } from '@chakra-ui/react'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <Box as='footer' bg='#252525' color='white'>
      <Container py='2rem' centerContent>
        <Stack align='center' gap={5}>
          <Stack align='center'>
            <Heading as='h5' size='md'>Contact us</Heading>
            <Link href={`mailto:` + dojoData.email}><Icon as={FiMail} boxSize={8} /></Link>
          </Stack>
          <Image src={`img/` + dojoData.logo} alt="logo" w='50px' h='60px' />
          <Text>&copy; 2023 {dojoData.name} Kendo Club</Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer