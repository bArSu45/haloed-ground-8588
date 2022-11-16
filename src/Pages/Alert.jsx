import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aler = () => {
   const nav=useNavigate()
        const {
          isOpen: isVisible,
          onClose,
          onOpen,
        } = useDisclosure({ defaultIsOpen: true })
      
        return (
        <>
              
              <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
   
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    <Button onClick={()=>nav("/") }  > Home  </Button>
  </AlertDescription>
</Alert>
        
      
        </>)
}

export default Aler
