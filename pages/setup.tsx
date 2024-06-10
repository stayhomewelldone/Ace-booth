import { Box, Button, Input, VStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FaSlack } from 'react-icons/fa';

const SetupProfilePage = () => {
    const interests = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];
    const hobbies = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];


    return (
        <VStack spacing={4} p={5}>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">Setup Profile</Text>
            <Button leftIcon={<FaSlack />} colorScheme="purple" width="50%" size="lg">
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
            <Button colorScheme="blackAlpha" size="lg" width="50%" mt={5}>Continue</Button>
        </VStack>
    );
};

export default SetupProfilePage;
