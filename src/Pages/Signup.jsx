import { Box, Button, Checkbox, Flex, Heading, HStack, Img, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'


function PasswordInput() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input 
      variant='flushed'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default function Signup() {
  return (
    <Flex m={'auto'} w="100%" bg={"#fff8de"}>
      <Box w="50%">
        <Img w="100%" p="80px" src='https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png'></Img>
      </Box>
      <Box w="50%" m="auto">
        <Box p="80px"  bg="white">
          <Heading>
          Sign Up
          </Heading>
          <Text fontSize={20} fontFamily="bold">Hi new buddy, let's get you started with the bewakoofi!</Text>
          <VStack spacing={10}>
          <Input variant='flushed' placeholder='NAME' />
          <Input variant='flushed' placeholder='MOBILE' />
         
          <Input variant='flushed' placeholder='EMAIL' />
          <PasswordInput/>
          <Checkbox colorScheme='teal' defaultChecked>
          I want to receive order updates on Whatsapp
  </Checkbox>
          <Button bg={"#989898"} w="120px" color={"white"}> PROCEED</Button>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}
