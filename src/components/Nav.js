import dojoData from '../data/dojo.json'
import { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Menu, MenuButton, MenuList, MenuItem, IconButton, Drawer, DrawerBody, DrawerOverlay,
  DrawerContent, DrawerCloseButton, useDisclosure, Image, Link, Flex, Text, Stack
} from '@chakra-ui/react'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Flex as='nav' p={2} align='center' justifyContent='space-between' className='nav'>
      <Link as={RouterLink} to='/'>
        <Stack direction='row'>
          <Image src={`img/` + dojoData.logo} alt="logo" w='35px' h='40px' />
          <Text fontSize={20} fontWeight={700} alignSelf='center'>Kent Kendo</Text>
        </Stack>
      </Link>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='solid'
          backgroundColor='blackAlpha.300'
          onClick={onOpen}
          ref={btnRef}
        />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={5}>
              <Flex direction='column' align='center'>
                <Link as={RouterLink} to='/' className='nav-link' onClick={onClose}>Home</Link>
                <Link as={RouterLink} to='/about' className='nav-link' onClick={onClose}>Club</Link>
                <Link as={RouterLink} to='/class' className='nav-link' onClick={onClose}>Class</Link>
                <Link as={RouterLink} to='/register' className='nav-link' onClick={onClose}>Registration</Link>
                <Link as={RouterLink} to='/faq' className='nav-link' onClick={onClose}>FAQ</Link>
                <Menu closeOnSelect={true}>
                  <MenuButton className='nav-link'>Resources</MenuButton>
                  <MenuList>
                    <Link as={RouterLink} to='/terms' onClick={onClose}><MenuItem>Terms</MenuItem></Link>
                    <Link href='https://youtu.be/cpidZRL5ZbI' isExternal onClick={onClose}><MenuItem>Warmup<ExternalLinkIcon mx='2px' /></MenuItem></Link>
                  </MenuList>
                </Menu>
                <Link as={RouterLink} to='/gallery' className='nav-link' onClick={onClose}>Gallery</Link>
                <Link href={dojoData.calendar} isExternal className='nav-link' onClick={onClose}>
                  Calendar <ExternalLinkIcon mx='2px' />
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Menu>
    </Flex >
  )
}

export default Nav