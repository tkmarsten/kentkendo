import dojoData from '../data/dojo.json'
import { Link as RouterLink } from 'react-router-dom'
import { Image, Icon, Link, Text, Box, Alert, AlertIcon, Grid, GridItem, Container, Flex, Stack } from '@chakra-ui/react'
import { LuMail } from 'react-icons/lu'
import { SiGooglecalendar } from 'react-icons/si'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <>
      <Box as='footer' py='2rem' fontSize={{ base: '14px' }} pb='4rem'>
        <Container minWidth='min(100% - 30px, 80%)'>
          <Grid templateColumns='repeat(4, 1fr)' gap={4}>
            <GridItem>
              <Text fontWeight={800} color='gray.500'>Our Club</Text>
              <Flex direction='column'>
                <Link as={RouterLink} to='/about'>About</Link>
                <Link as={RouterLink} to='/class'>Class</Link>
                <Link as={RouterLink} to='/register'>Registration</Link>
                <Link as={RouterLink} to='/gallery'>Gallery</Link>
              </Flex>
            </GridItem>
            <GridItem>
              <Text fontWeight={800} color='gray.500'>Resources</Text>
              <Flex direction='column'>
                <Link as={RouterLink} to='/faq'>FAQ</Link>
                <Link as={RouterLink} to='/terms'>Terms</Link>
                <Link href='https://youtu.be/cpidZRL5ZbI' isExternal>
                  Warmup<ExternalLinkIcon mx='2px' />
                </Link>
              </Flex>
            </GridItem>
            <GridItem>
              <Text fontWeight={800} color='gray.500'>Links</Text>
              <Flex direction='column'>
                <Link href='https://www.federalwaykendo.org/' isExternal>
                  Federal Way Kendo Club<ExternalLinkIcon mx='2px' />
                </Link>
                <Link href='https://web2.myvscloud.com/wbwsc/wakentwt.wsc/splash.html' isExternal>
                  Kent Parks Registration<ExternalLinkIcon mx='2px' />
                </Link>
              </Flex>
            </GridItem>
            <GridItem>
              <Stack direction='column'>
                <Box>
                  <Text fontWeight={800} color='gray.500'>Practice Hours</Text>
                  <Text>Monday</Text>
                  <Text>Beginning - 6:30-7:15pm</Text>
                  <Text>Intermediate - 7:15-8:00pm</Text>
                  <br />
                  <Text>Wednesday</Text>
                  <Text>Advanced - 6:30-8:00pm</Text>
                </Box>
                <Box>
                  <Text fontWeight={800} color='gray.500'>Location</Text>
                  <Text>Kent Commons Community Center</Text>
                  <Text>525 4th Ave N, Kent, WA 98032</Text>
                </Box>
              </Stack>
            </GridItem>
          </Grid>
          <Flex justify='center'>
            <Stack direction='row' gap={4} mr='auto'>
              <Flex direction='column' justify='center' align='center'>
                <Link href={`mailto:` + dojoData.email}><Icon as={LuMail} boxSize={8} /></Link>
                <Text>Contact us</Text>
              </Flex>
              <Flex direction='column' justify='center' align='center'>
                <Link href={dojoData.calendar}><Icon as={SiGooglecalendar} boxSize={8} /></Link>
                <Text>Google Calendar</Text>
              </Flex>
            </Stack>
            <Stack gap={4} position='absolute' left='50%' transform='translate(-50%)'>
              <Image src={`img/` + dojoData.logo} alt="logo" w='50px' h='60px' m='auto' />
              <Text textAlign='center'>&copy; 2023 {dojoData.name} Kendo Club</Text>
            </Stack>
          </Flex>
        </Container>
      </Box >
      <Alert status='warning' color='black'>
        <AlertIcon />
        This website is currently under construction and some things may be unavailable at this time. Thank you for your patience.
      </Alert>
    </>
  )
}

export default Footer