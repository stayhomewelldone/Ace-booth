import { Box, Button, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
// import { Circ} from '@react-md/icon';

interface SelfieTaker {
    name: string;
    role: string;
    points: number;
}

const ConfirmPage = () => {
    const selfieTakers: SelfieTaker[] = [
        { name: 'Joshua W.', role: 'Sales Executive', points: 5 },
        { name: 'Emily S.', role: 'Customer Support', points: 3 },
        { name: 'Alex M.', role: 'Marketing Specialist', points: 1 },
    ];


    return (
        
        <Box p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bg="gray.100">
        {/* Placeholder for the recently taken selfie */}
        <Box bg="gray.300" w="50%" h="300px" mb={4}></Box>

        <Button mb={4}  colorScheme="blackAlpha" variant="solid">
            Take New Selfie
        </Button>

        <Heading size="md" mb={2}>Recent Selfietakers</Heading>
        <List spacing={3} >
            {selfieTakers.map((selfieTaker, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                    {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
                    <Box flex="1">
                        <Text fontWeight="bold">{selfieTaker.name}</Text>
                        <Text fontSize="sm">{selfieTaker.role}</Text>
                        <Text fontSize="xs">{selfieTaker.points} ACE Points</Text>
                    </Box>
                </ListItem>
            ))}
        </List>

        <Button mt={4} colorScheme="blackAlpha" variant="solid">
            Continue
        </Button>
    </Box>
    );
}
export default ConfirmPage;
