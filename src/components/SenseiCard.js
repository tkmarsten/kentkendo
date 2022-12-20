import { Avatar, Text } from '@chakra-ui/react'

const SenseiCard = ({ name, rank }) => {
  return (
    <>
      <Avatar bg='gray.600' size='xl' mb='1rem' />
      <Text>{name}</Text>
      <Text as='sub' mt={0}>{rank}</Text>
    </>
  )
}

export default SenseiCard