import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';

const CongratulationsPage = () => {
    return (
        <VStack spacing={8} align="center" justify="center" height="100vh">
            <Heading size="2xl" textAlign="center">Congratulations!</Heading>
            <Text fontSize="xl" textAlign="center">
                You have successfully navigated through all the screens.
            </Text>
        </VStack>
        
    );
};

export default CongratulationsPage;
