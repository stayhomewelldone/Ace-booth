import { Box, Button, Heading, Link, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from 'next/link'; // Import NextLink from 'next/link'

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
        <Link as={NextLink} href='/'>
        <Button bg="black" _hover={{ bg: 'black' }} mt={4} width="300px" rounded={10} color="white" variant="solid" size="lg">
            Take New Selfie
        </Button>
        </Link>
        <Heading size="md" mt={4}  mb={2}>Recent Selfietakers</Heading>
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
        <NextLink  href='/setup'>
        <Button bg="black" _hover={{ bg: 'black' }} mt={4}  width="300px" rounded={10} color="white" variant="solid" size="lg">
       
            Continue
       </Button>
        </NextLink>
    </Box>
    );
}
export default ConfirmPage;
