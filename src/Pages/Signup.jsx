import { Box, Button, Checkbox, Flex, Heading, Img, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'



function PasswordInput( {fnp,fn}) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input 
      variant='flushed'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        value={fnp}
         placeholder='PASSWORD' onChange={fn}
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

const navigate=useNavigate()
 
  var mobilesign = JSON.parse(localStorage.getItem("mobile"))
  const dispatch=useDispatch()
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(mobilesign);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState([]);

  const postData = ({name,mobile,email,password}) => {
    const newItem = {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
      
      id: new Date().toDateString() + name
    };
    setUserdata([...userdata, newItem]);
  };
  const handleChange = (e) => {
    e.preventDefault();
    postData({name,mobile,email,password});
    setName("");
    setMobile('');
    setEmail("");
    setPassword("");
    // localStorage.setItem("signup", JSON.stringify(userdata))
  // navigate("/")
  };
  
  localStorage.setItem("signup", JSON.stringify(userdata))
  // navigate("/")
 
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
       <form onSubmit={handleChange}>
          <Input variant='flushed' placeholder='NAME' onChange={(e) =>  setName(e.target.value)} />
          <Input variant='flushed' value={mobilesign} placeholder='MOBILE'onChange={(e) => setMobile(e.target.value)}  />
         
          <Input  variant='flushed' placeholder='EMAIL' onChange={(e) =>  setEmail(e.target.value)}/>
          {/* <Input  variant='flushed' placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)} /> */}
          <PasswordInput fnp={password} fn={(e) => setPassword(e.target.value)}/>
          <Checkbox colorScheme='teal' defaultChecked>
          I want to receive order updates on Whatsapp
  </Checkbox>
          <Button  type='submit' bg={"#989898"} w="120px" color={"white"}> PROCEED</Button>
          </form>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}
