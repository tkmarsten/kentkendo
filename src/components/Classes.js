import BgImage from '../components/BgImage'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link, Flex, Heading } from '@chakra-ui/react'

const Classes = () => {
  return (
    <Box as='section' className='Classes'>
      <Heading fontSize={24}>What we offer</Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='space-around' gap={5} mt='2rem'>
        <Box className='class-card'>
          <BgImage image='advanced.jpg' className='card-inner'>
            <Link as={RouterLink} fontWeight={700} fontSize={20}>
              Beginning
            </Link>
          </BgImage>
        </Box>
        <Box className='class-card'>
          <BgImage image='advanced.jpg'>
            <Link as={RouterLink} fontWeight={700} fontSize={20}>
              Intermediate
            </Link>
          </BgImage>
        </Box>
        <Box className='class-card'>
          <BgImage image='advanced.jpg'>
            <Link as={RouterLink} fontWeight={700} fontSize={20}>
              Advanced
            </Link>
          </BgImage>
        </Box>
      </Flex>
    </Box >
  )
}

export default Classes