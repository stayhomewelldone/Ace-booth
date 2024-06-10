import { Box, VStack, Button, Heading, Text, List, ListItem, Divider } from '@chakra-ui/react';

const ColleagueConnectPage = () => {
    const meetups = [
        { name: 'Alice Johnson and Jaden Linger' },
        { name: 'Bob Smith and John Doe' }
    ];

    return (
        <VStack spacing={4} p={5}>
            <Heading size="xl" textAlign="center">Colleague Connect</Heading>
            <Text fontSize="md" textAlign="center">
                Find and approach Jane Smith and take an even better selfie in real life, to beat the machine! 🌟 <br/>
                Each approach gives you 1 point.<br/> At the end of the week, individuals with the most points can redeem them for amazing gifts!
            </Text>
            <Button colorScheme="blackAlpha"  mb={4}>
                Approach Colleague
            </Button>
            <Divider />
            <Heading size="lg" my={4}>Upcoming Selfie Meetups</Heading>
            <List spacing={3} >
                {meetups.map((meetup, index) => (
                    <ListItem key={index} bg="gray.200" p={2} borderRadius="md">
                        {meetup.name}
                    </ListItem>
                ))}
            </List>
        </VStack>
    );
};

export default ColleagueConnectPage;
