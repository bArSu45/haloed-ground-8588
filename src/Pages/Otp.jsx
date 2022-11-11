import { Box, Button, Heading, HStack, Input, PinInput, PinInputField, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Otp = () => {
  var mobilesign = JSON.parse(localStorage.getItem("mobile"))
  var otp1 = JSON.parse(localStorage.getItem("otp"))
  const [otp,setOtp]=useState("")
  const[min,setMin]=useState(1)
  const navigate=useNavigate()
  const[second,setSecond]=useState(59)
  let timer;
  useEffect(() => {
     timer = setInterval(() => {setSecond(second - 1)
    if(0===second){
      setMin(min - 1)
      setSecond(59)
      if(min===0){
        clearInterval(timer)
      }
    }}, 1000);
    
    
    return ()=> clearInterval(timer)
  },);
 
    if(second===-1){
      clearInterval(timer)
    }
    const onClick=()=>{
      console.log("hjj",otp)
      if(true){
        navigate("/")
      }
    }
  return (
    <Stack align="center" spacing={12}>
        <Heading>
        Verify with OTP
        </Heading>
        <Text>Sent to</Text>
        <Box><Input  value={mobilesign} variant='flushed' placeholder='MOBILE' /></Box> 
        <Text>Enter OTP</Text>
        <HStack>
  <PinInput value={otp1}>
    <PinInputField  />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Box>{min}:{second}</Box>
<Box><Button onClick={onClick}>PROCEED</Button></Box>

    </Stack>
  )
}

export default Otp
