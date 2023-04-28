import { Container, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { FiChevronsRight } from 'react-icons/fi'

const Class = () => {
  return (
    <Container align='center' my='2rem'>
      <Heading as='h1' mb='1rem'>Class Curriculum</Heading>
      <Heading as='h3' size='md'>Beginning <br />(1-3 Months)*</Heading>
      <List align='start' mb='12px'>
        <ListItem>
          Concepts
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Using your spirit (kiai)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Posture
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Etiquette (rei-ho)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Bowing (rei)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Meditation (moku-sou)
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Stances
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Neutral standing position (shi-zen-tai)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Silent sitting (seiza)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Crouched position (son-kyo)
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Footwork (ashi-sabaki)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          One step (okuri-ashi)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Continuous steps (renzoku-okuri-ashi)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Attack step (fumi-komi)
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Basic swings / strikes (suburi)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Top to bottom swing (jyouge-buri)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Head strike (men)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Wrist strike (kote)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Head and wrist strike (kote-men)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Fast head strike (haya-suburi)
        </ListItem>
      </List>

      <Heading as='h3' size='md'>Intermediate <br />(4-6 Months)*</Heading>
      <List align='start' mb='12px'>
        <ListItem>
          All previous things learned
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Swings / strikes (suburi)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Diagonal swing (naname-buri)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Diagonal head strike (sayu-men)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Torso strike (dou)
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Backwards head strike (hiki-men)
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Drills
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Kiri-kaeshi
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Men
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Kote
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Dou
        </ListItem>
        <ListItem>
          <ListIcon as={FiChevronsRight} color='green.400' />
          Hiki-men
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Warmups
        </ListItem>
        <ListItem>
          Receiving with shinai
        </ListItem>
        <ListItem>
          Preperation for uniform and armor
        </ListItem>
      </List>

      <Heading as='h3' size='md'>Advanced <br />(7+ Months)</Heading>
      <List align='start' mb='12px'>
        <ListItem>
          All previous things learned
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Hitting and receiving in armor
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Advanced techniques (waza)
        </ListItem>
        <ListItem>
          Open hit practice (kakari-geiko)
        </ListItem>
        <ListItem>
          Sparring practice (ji-geiko)
        </ListItem>
      </List>
      <List align='start' mb='12px'>
        <ListItem>
          Preparation for grade tests and tournaments
        </ListItem>
      </List>

      <Text>
        *Classes are always subject to change based on the overall skill level, age range, and progression of the students.
        We adjust the speed and curriculum week by week to best fit the class.
      </Text>
    </Container>
  )
}

export default Class