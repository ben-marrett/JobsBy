import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import LoggedIn from './LoggedIn'

function Splash(){

  return (
    <Container maxW='container.sm'>
      <br></br>
        <Heading fontWeight='fontWeights.bold'>
          Welcome.
        </Heading>
        
        
      <Text>JobsBy is an app to post and find jobs in your neighbourhood.</Text>
      <Text>Please log in below.</Text>
      <LoggedIn />
    </Container>
  )
}

export default Splash