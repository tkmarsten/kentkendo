import AffImg from './AffImg'
import { Container, Stack, Heading } from '@chakra-ui/react'

const Affiliations = () => {
  return (
    <Container my='4rem'>
      <Heading as={'h3'} mb='2rem'>Affiliations</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} gap={10}>
        <AffImg img='auskf.jpg' url='https://www.auskf.org/home' caption='auskf' heading='All United States Kendo Federation' />
        <AffImg img='pnkf.jpg' url='https://www.pnkf.org/' caption='pnkf' heading='Pacific Northwest Kendo Federation' />
        <AffImg img='citylogo.png' url='https://federalwaykendo.org/' caption='federalway' heading='Federal Way Kendo Club' />
      </Stack>
    </Container>
  )
}

export default Affiliations