import React from "react";
import { Box, HStack, Spacer } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import the icons

function Header() {
  return (
    <HStack bg="#1a202c" color="white" w="100%" h="10vh">
     <Spacer></Spacer>
      <Box ml="100px">
        <a href="https://youtu.be/dQw4w9WgXcQ?si=ES02OmdYNtuAB4c9" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
      </Box>
      <Box m="30px">
        <a href="https://github.com/saviooo02" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
      </Box>
    </HStack>
  );
}

export default Header;