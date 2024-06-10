import { Box, VStack, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';

const ColleagueMashupPage = () => {
    const hobbies = [
        { title: 'Photography', details: 'Travel enthusiast, Album link' },
        { title: 'Painting', details: 'Art lover, Gallery link' },
        { title: 'Sports', details: 'Fitness fanatic, Workout routine' }
    ];

    return (
        <VStack spacing={4} p={4}>
            <Box bg="gray.200" w="50%" h="300px" mb={4} />  {/* Placeholder for the image */}
            <Heading size="lg">John Doe & Jane Smith Mashup</Heading>
            <Text fontSize="xl" fontWeight="bold">Interests & Hobbies of Jane Smith</Text>
            <SimpleGrid columns={1} spacing={2} w="50%">
                {hobbies.map((hobby, index) => (
                    <Box key={index} p={3} shadow="md" borderWidth="1px" borderRadius="lg">
                        <Heading size="md">{hobby.title}</Heading>
                        <Text mt={2}>{hobby.details}</Text>
                    </Box>
                ))}
            </SimpleGrid>
            <Text fontSize="xl" fontWeight="bold" mt={4}>Agency Details of Jane Smith</Text>
            <Box p={3} shadow="md" borderWidth="1px" borderRadius="lg">
                <Text fontSize="md">Agency Name</Text>
                <Text>XYZ Agency</Text>
            </Box>
            <Button colorScheme="blackAlpha" mt={4} >Continue</Button>
        </VStack>
    );
};

export default ColleagueMashupPage;
