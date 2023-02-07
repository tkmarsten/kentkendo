import dojoData from '../data/dojo.json'
import { Heading } from '@chakra-ui/react'

const Masthead = () => {
  return (
    <header>
      <Heading size={{ base: 'xl', lg: '4xl' }}>{dojoData.name} Kendo Club</Heading>
      <Heading size={{ base: 'xl', lg: '4xl' }}>剣道</Heading>
    </header>
  )
}

export default Masthead