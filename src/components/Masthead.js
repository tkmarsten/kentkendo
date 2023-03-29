import { Heading, Link } from '@chakra-ui/react'

const Masthead = () => {
  return (
    <header>
      <Heading fontSize='clamp(3rem, 6vw, 4rem)'>Welcome Kenshi</Heading>
      <Link mt={4} href='#intro'>Start your kendo journey</Link>
    </header>
  )
}

export default Masthead