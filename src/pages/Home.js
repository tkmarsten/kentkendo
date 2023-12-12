import Classes from '../components/Classes'
import Setting from '../components/Setting'
import dojoData from '../data/dojo.json'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, Heading, Flex, Image, Text, Link, Button, Icon, SimpleGrid } from '@chakra-ui/react'
import { FiMessageSquare, FiInfo } from 'react-icons/fi'
import Header from '../components/Header'
import Location from '../components/Location'

const Home = () => {
  return (
    <Box align='center'>
      <Container className='Home' minWidth='min(100% - 30px, 80%)'>
        <Header />
        <Location />
        <Classes />
        <Setting />

        <Flex as='section' direction={{ base: 'column-reverse', md: 'row' }} align='center'>
          <Container mt='2rem'>
            <Heading fontSize={24}>
              Ready to start?
            </Heading>
            <Text my='1rem'>
              Anyone regardless of age, gender, or background
              may start in our beginning class and progress to the advanced.
            </Text>
            <Link as={RouterLink} to='/register'>
              <Button>
                Register now
              </Button>
            </Link>
          </Container>
          <Image src='img/join.jpg' w={250}></Image>
        </Flex>

        <Box as='section'>
          <Heading fontSize={24} mb='2rem'>Still have questions?</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} placeItems='center' textAlign='start'>
            <Box maxW='300px'>
              <Heading fontSize={20} display='flex' alignItems='center' justifyContent='center' mb={1}>
                <Icon as={FiInfo} boxSize={6} mr={1} />
                <Link as={RouterLink} to='/faq'>
                  FAQ
                </Link>
              </Heading>
              <Text>
                Check out our FAQ <Link as={RouterLink} to='/faq'><Button variant='link'>here.
                </Button></Link> We have answered lots of questions regarding class, pricing, and some other basic parts of kendo.
              </Text>
            </Box>
            <Box maxW='300px'>
              <Heading fontSize={20} display='flex' alignItems='center' justifyContent='center' mb={1}>
                <Icon as={FiMessageSquare} boxSize={6} mr={1} />
                Contact
              </Heading>
              <Text>FAQ does not have what you need? <Link href={`mailto:` + dojoData.email}><Button variant='link'>Email
              </Button></Link> us and we wills try our best to answer your question! Typical response time is 1-2 hours.</Text>
            </Box>
          </SimpleGrid>
        </Box>

      </Container>
    </Box>
  )
}

export default Home