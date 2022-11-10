import { Box, Button, Heading, HStack, Input, PinInput, PinInputField, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Otp = () => {
  const[min,setMin]=useState(1)
  const[second,setSecond]=useState(9)
  let timer;
  useEffect(() => {
     timer = setInterval(() => {setSecond(second - 1)
    if(0===second){
      setMin(min - 1)
      setSecond(2)
      if(min===0){
        clearInterval(timer)
      }
    }}, 1000);
    
    
    return ()=> clearInterval(timer)
  },);
 
    if(second===-1){
      clearInterval(timer)
    }
  return (
    <Stack align="center" spacing={12}>
        <Heading>
        Verify with OTP
        </Heading>
        <Text>Sent to</Text>
        <Box><Input  value={8319739024} variant='flushed' placeholder='MOBILE' /></Box> 
        <Text>Enter OTP</Text>
        <HStack>
  <PinInput>
    <PinInputField  />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Box>{min}:{second}</Box>
<Box><Button>PROCEED</Button></Box>

    </Stack>
  )
}

export default Otp
