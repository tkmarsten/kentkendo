import { Heading, Link, Button, ButtonGroup, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <header>
      <svg width="300" height="250" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="frame">
          <g id="shinai">
            <rect id="shinai1" x="15.8625" y="73.1003" width="87.735" height="5" transform="rotate(-44.103 15.8625 73.1003)" fill="#303030" />
            <rect id="shinai2" x="26.1841" y="58.9192" width="5.31727" height="11" transform="rotate(-44.103 26.1841 58.9192)" fill="#303030" />
          </g>
          <g id="men">
            <path id="men1" d="M87 50.5C87 60.165 84.3137 68 81 68C77.6863 68 75 60.165 75 50.5C75 40.835 77.6863 33 81 33C84.3137 33 87 40.835 87 50.5Z" fill="#A6A6A6" />
            <rect id="men2" x="81" y="29" width="30" height="42" rx="6" fill="#303030" />
            <rect id="men3" x="71" y="84.563" width="39.9986" height="17.1925" rx="4" transform="rotate(-45.5694 71 84.563)" fill="#303030" />
          </g>
        </g>
      </svg>

      <Heading fontSize='clamp(2rem, 6vw, 4rem)'>Start your kendo journey here</Heading>
      <Text my='1rem'>Learn discipline, respect, and the way of the sword at Kent Kendo Club.</Text>
      <ButtonGroup>
        <Link href='#intro'>
          <Button colorScheme='red'>
            Register
          </Button>
        </Link>
        <Link href='#intro'>
          <Button variant='outline'>
            Learn more
          </Button>
        </Link>
      </ButtonGroup>
    </header>
  )
}

export default Header