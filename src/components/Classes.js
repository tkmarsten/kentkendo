import BgImage from '../components/BgImage'
import { Link as RouterLink } from 'react-router-dom'
import { Text, Box, Link, Flex, Heading } from '@chakra-ui/react'

const Classes = () => {
  return (
    <Box as='section'>
      <Heading fontSize={24}>Classes</Heading>
      <Text>
        We offer classes for all skill ranges.
        Anyone regardless of background may start in our beginning class and progress to the advanced.
      </Text>
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