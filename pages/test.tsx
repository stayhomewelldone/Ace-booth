import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const IndexPage = () => {
const {toggleColorMode} = useColorMode()
const  formBackGround  = useColorModeValue("gray.100", "gray.700")
return (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background={formBackGround} p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <Input placeholder="jafir.k@live.nl" variant="filled" mb={3} type="email" />
      <Input placeholder="*********" variant="filled" mb={6} type="password"/>
      <Button mb={6} colorScheme="teal">Log in</Button>
      <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
    </Flex>

  </Flex>
) 
}
export default IndexPage;
