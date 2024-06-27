import {  VStack, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';


const CongratulationsPage = () => {
    return (
        <VStack spacing={8} align="center" justify="center" height="100vh">
            <Heading size="2xl" textAlign="center">Congratulations!</Heading>
            <Text fontSize="xl" textAlign="center">
                You have successfully navigated through all the screens.
            </Text>
            <NextLink href='/'>
            <Button bg="black" _hover={{ bg: 'black' }} mt={4} rounded={10} width="300px" color="white" variant="solid" size="lg">Finish</Button>
            </NextLink>
        </VStack>
        
    );
};

export default CongratulationsPage;
