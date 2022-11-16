import { Box, Button, Heading, HStack, Input, PinInput, PinInputField, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Aler from './Alert'

const Otp = () => {
  var mobilesign = JSON.parse(localStorage.getItem("mobile"))
  var otp1 = JSON.parse(localStorage.getItem("otp"))
  const [otp,setOtp]=useState("")
  const[min,setMin]=useState(1)
  const navigate=useNavigate()
  const[second,setSecond]=useState(59)
  const [success, setSuccess] = useState(false);
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
        localStorage.setItem("sts", JSON.stringify(true));
setSuccess(true)
navigate("/alert")
        // navigate("/")
      }
    }
  return (
    <extendTheme>
      <Navbar/>
    <Stack align="center" spacing={12}>
        <Heading>
        Verify with OTP
        </Heading>
        <Text>Sent to</Text>
        <Box><Input textAlign="center" fontFamily="bold"  value={mobilesign} variant='flushed' placeholder='MOBILE' /></Box> 
        <Text>Enter OTP</Text>
        <HStack>
  <PinInput value={otp1}>
    <PinInputField  />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Box fontFamily="bold">RESEND OTP in {min}:{second}s</Box>
<Box><Button  onClick={onClick}>LOGIN</Button></Box>
{success?<Aler/>:<></>}
    </Stack>
    </extendTheme>
  )
}

export default Otp
