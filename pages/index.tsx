import React from 'react';
import { Box, Button, Text, VStack, Heading, Center } from '@chakra-ui/react';
import NextLink from 'next/link';


const HomePage = () => {
    return (
        <Box p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bg="gray.100">
        <VStack spacing={8} align="stretch" maxWidth="400px" width="full">
          <Heading as="h1" size="lg" textAlign="center">
            Welcome to the ACE Booth
          </Heading>
          <Text fontSize="md" textAlign="center">
            To strengthen togetherness
          </Text>
          <Text fontSize="lg" textAlign="center">
            Take a selfie!
          </Text>
          <Text fontSize="sm" textAlign="center">
            The selfie you take will be merged with the selfie of a random colleague in this application.
          </Text>
          
          {/* Video feed placeholder */}
          <Center bg="gray.300" h="300px" borderRadius="md">
            <Text>Video Feed Placeholder</Text>
          </Center>
          </VStack>
          <NextLink href='/confirm'>
          <Button bg="black" _hover={{ bg: 'black' }} mt={4} width={"300px"} rounded={10} color="white" variant="solid" size="lg">
            Take Selfie
          </Button>
          </NextLink>
        
      </Box>
    );
}

export default HomePage;
