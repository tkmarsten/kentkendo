import { Heading, Link } from '@chakra-ui/react'

const Masthead = () => {
  return (
    <header>
      <Heading fontSize='clamp(2rem, 4vw, 5rem)'>Welcome Kenshi</Heading>
      <Link mt={4} href='#intro'>Start your kendo journey</Link>
    </header>
  )
}

export default Masthead