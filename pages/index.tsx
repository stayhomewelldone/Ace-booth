import React, { useCallback, useRef } from 'react';
import { Box, Button, Text, VStack, Heading, Center } from '@chakra-ui/react';
import NextLink from 'next/link';
import Webcam from "react-webcam";
import { storage } from './firebase/firebaseConfig'; // Adjust the path based on your project structure
import { ref, uploadBytes } from 'firebase/storage';





const HomePage = () => {
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // const imageRef = ref(storage, `images/${Date.now()}.png`);
    localStorage.setItem('capturedImage', imageSrc);


    //  // Convert base64 to Blob
    //  fetch(imageSrc)
    //  .then(res => res.blob())
    //  .then(blob => {
    //    // Upload the Blob to Firebase Storage
    //    uploadBytes(imageRef, blob).then((snapshot) => {
    //      console.log('Image uploaded successfully');
    //    }).catch((error) => {
    //      console.error('Upload failed', error);
    //    });
    //  });

  });

    return (
        <Box p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" >
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
          <Webcam  ref={webcamRef} mirrored screenshotQuality={1} imageSmoothing />
          </Center>
          </VStack>
          <NextLink href='/confirm'>
          <Button bg="black" _hover={{ bg: 'black' }} mt={4} width={"300px"} onClick={capture} rounded={10} color="white" variant="solid" size="lg">
            Take Selfie
          </Button>
          </NextLink>
        
      </Box>
    );
}

export default HomePage;
