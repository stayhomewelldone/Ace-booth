import { Button,VStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { FaSlack } from 'react-icons/fa';
import NextLink from 'next/link';

const SetupProfilePage = () => {
    const interests = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];
    const hobbies = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];


    return (
        <VStack spacing={4} p={5}>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">Setup Profile</Text>
            <Button leftIcon={<FaSlack />} rounded={20} colorScheme="purple" width="300px" size="lg">
                Sign in with Slack
            </Button>
            <Text mb={2}>Choose Your Hobbies</Text>
            <Wrap>
                {hobbies.map(hobbies => (
                    <WrapItem key={hobbies}>
                        <Button variant="outline" colorScheme="gray">{hobbies}</Button>
                    </WrapItem>
                ))}
            </Wrap>
            <Text mb={2}>Share Your Interests</Text>
            <Wrap>
                {interests.map(interest => (
                    <WrapItem key={interest}>
                        <Button variant="outline" colorScheme="gray">{interest}</Button>
                    </WrapItem>
                ))}
            </Wrap>
            <NextLink  href="/mashup">
            <Button bg="black" _hover={{ bg: 'black' }} size="lg" width="300px" rounded={10} color="white" variant="solid" mt={5}>Continue</Button>
            </NextLink>
        </VStack>
    );
};

export default SetupProfilePage;
