import {  VStack, Button, Heading, Text, List, ListItem, Divider } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import NextLink from 'next/link';
import { doc,updateDoc, arrayUnion, } from "firebase/firestore"; 
import { db } from '../utils/firebase/firebaseConfig';




const ColleagueConnectPage = () => {
    const meetups = [
        { name: 'Alice Johnson and Jaden Linger' },
        { name: 'Bob Smith and John Doe' }
    ];

    useEffect(() => {

        const addData = async () => {
        const docRefId =  localStorage.getItem('docRefId');
        const listRef = doc(db, "users", "listOfIds");
        await updateDoc(listRef, {
            ids: arrayUnion(docRefId)
        });
        console.log("field written with ID: ", docRefId);

        }
        addData();
    }, []); 

    return (
        <VStack spacing={4} p={5}>
            <Heading size="xl" textAlign="center">Colleague Connect</Heading>
            <Text fontSize="md" textAlign="center">
                Find and approach Jane Smith and take an even better selfie in real life, to beat the machine! 🌟 <br/>
                Each approach gives you 1 point.<br/> At the end of the week, individuals with the most points can redeem them for amazing gifts!
            </Text>
            <NextLink href='/finish'>
            <Button bg="black" _hover={{ bg: 'black' }} mt={4} width="300px" rounded={10} color="white" variant="solid" size="lg">
                Approach Colleague
            </Button>
            </NextLink>
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
