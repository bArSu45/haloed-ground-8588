import { Box, Button, Heading, HStack, Input, PinInput, PinInputField, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Otp = () => {

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
<Box><Button>PROCEED</Button></Box>

    </Stack>
  )
}

export default Otp
