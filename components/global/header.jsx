import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useRef } from 'react'
import Link from 'next/link'

  

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box>
      <Button ref={btnRef} colorScheme='blackAlpha' variant='outline' m='3' position='fixed' onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor='black' opacity='75%' color='azure'>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody fontWeight='bold'>

            <Link href="/">
              <a>
                <Text mt='10' borderBottom='1px'>HOME</Text>
              </a>
            </Link>

            <Link href="/company">
              <a>
                <Text mt='10' borderBottom='1px'>COMPANY</Text>
              </a>
            </Link>

            <Link href="/privacy">
              <a>
                <Text mt='10' borderBottom='1px'>PRIVACYPOLICY</Text>
              </a>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}