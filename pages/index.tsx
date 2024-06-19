import { Box, Button, Text, VStack, Heading, Center } from '@chakra-ui/react';


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
  
          <Button colorScheme="blackAlpha" variant="solid" size="lg">
            Take Selfie
          </Button>
        </VStack>
      </Box>
    );
}

export default HomePage;
