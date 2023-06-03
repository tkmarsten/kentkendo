import dojoData from '../data/dojo.json'
import { Stack, Text, Link, Box, Container, Icon, Button, Grid, GridItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FiClock } from 'react-icons/fi'

const Setting = () => {
  const weekdays = ['Monday', 'Wednesday']

  return (
    <Box as='section'>
      <Icon as={FiClock} boxSize={12} mb='2rem' />
      <Grid templateColumns='repeat(2, 1fr)' outline='solid' outlineColor='gray.200'>
        {weekdays.map((day) => (
          <GridItem className='weekday'>
            <Box className='weekday-name'>
              {day}
            </Box>
            <Box className='weekday-body'>
              {(day === 'Monday') &&
                <>
                  <Box className='weekday-content' mb='10px'>
                    <Text>Beginning</Text>
                    <Text>6:30-7:15pm</Text>
                  </Box>
                  <Box className='weekday-content'>
                    <Text>Intermediate</Text>
                    <Text>7:15-8pm</Text>
                  </Box>
                </>
              }
              {(day === 'Wednesday') &&
                <Box className='weekday-content'>
                  <Text>Advanced</Text>
                  <Text>6:30-8pm</Text>
                </Box>
              }
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Link href='https://calendar.google.com/calendar/u/2?cid=a2VudGtlbmRvY2x1YkBnbWFpbC5jb20'>
        <Button>
          Google Calendar
        </Button>
      </Link>

      <Container mt='2rem'>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
          <GridItem>
            <iframe
              src={dojoData.map}
              title='map'
            />
          </GridItem>
          <GridItem>
            <Stack align='center' mt='1rem'>
              <Link href={dojoData.website} isExternal>{dojoData.facility} <ExternalLinkIcon mx='2px' /></Link>
              <Text>{dojoData.room}</Text>
              <Text>{dojoData.address}</Text>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Setting