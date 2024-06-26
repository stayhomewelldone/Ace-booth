import { Box, Button, Center, Heading, Link, List, ListItem, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from 'next/link'; // Import NextLink from 'next/link'


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
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    useEffect(() => {
        // Load the image from local storage
        const imageSrc = localStorage.getItem('capturedImage');
        setImgSrc(imageSrc);
      }, []);



    return (
        
        <Box p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" >
        {/* Placeholder for the recently taken selfie */}
        <Center bg="gray.300"  h="300px" mb={4}>{imgSrc && <Image src={imgSrc}  alt="Captured Selfie" />} </Center>
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
