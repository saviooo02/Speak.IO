import React from 'react';
import { Center, Heading, Text, Button } from '@chakra-ui/react';
import Typist from 'react-typist'; // Import the Typist component
import 'react-typist/dist/Typist.css'; // Import the default styles for Typist

function Body() {
  return (
    <div>
      <Center h='90vh' bg="#1a202c" color="white" flexDirection="column">
        <Typist cursor={{ show: false }} avgTypingDelay={100}>
          <Heading mt="-100px" size="4xl" mb="4">
            <Typist.Delay ms={100} /> {/* Delay before typing */}
            <Typist.Delay ms={100} />
            <Typist.Delay ms={500} />
            Speak.io
          </Heading>
        </Typist>
        <Text color="white" fontSize="xl">
          A Socket.IO powered Chat App.
        </Text>
        <Button mt="20px" colorScheme='teal' size="sm">
          Explore
        </Button>
      </Center>
    </div>
  );
}

export default Body;