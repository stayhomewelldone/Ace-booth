import { Button,VStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import NextLink from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './firebase/firebaseConfig';


const SetupProfilePage = () => {
    const interests: Array<string> = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];
    const hobbies: Array<string> = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];

    const [selectedHobbies, setSelectedHobbies] = useState<string[]>([""]);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([""]);

    const {data: session} = useSession()

    const addData = async () => {
        if (session && session.user) {
        try {
        const docRef = await addDoc(collection(db, "users"), {
            name: session.user.name,
            email: session.user.email,
            hobbies: selectedHobbies,
            interests: selectedInterests
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}}
    
    function handleHobbiesClick(hobby: string ) {
        if (selectedHobbies.includes(hobby)) {
            setSelectedHobbies(selectedHobbies.filter(h => h !== hobby));
        } else {
            setSelectedHobbies([...selectedHobbies, hobby]);
        }
    }
    function handleInterestsClick(interest: string) {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(i => i !== interest))
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    }
    return (
        
        <VStack spacing={4} p={5}>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">Setup Profile</Text>
            <button onClick={() => signOut()}>Sign out</button>
            {/* <p>Signed in as {session.user.email}</p> */}
            {session?  
            <>
            <Text mb={2}>Welcome {session.user?.name}</Text>
            <Text mb={2}>Choose Your Hobbies</Text>
            <Wrap>
                {hobbies.map(hobbies => (
                    <WrapItem key={hobbies}>
                        <Button variant="outline" onClick={()=> {handleHobbiesClick(hobbies)}} colorScheme={selectedHobbies.includes(hobbies)? "blue" : "gray"}>{hobbies}</Button>
                    </WrapItem>
                ))}
            </Wrap>
            <Text mb={2}>Share Your Interests</Text>
            <Wrap>
                {interests.map(interest => (
                    <WrapItem key={interest}>
                        <Button variant="outline" onClick={()=> { handleInterestsClick(interest)}} colorScheme={selectedInterests.includes(interest)? "blue" : "gray"}>{interest}</Button>
                    </WrapItem>
                ))}
            </Wrap>
            <NextLink  href="/mashup">
            <Button bg="black" _hover={{ bg: 'black' }} size="lg" width="300px" onClick={addData} rounded={10} color="white" variant="solid" mt={5}>Continue</Button>
            </NextLink>
            </>          
            :
        <>
        Not signed in <br/>
        <Button onClick={()=> signIn('google')} leftIcon={<FaGoogle />} bg={"#131314"} variant="solid" color={"white"} fontStyle={"#1F1F1F"} size="lg" width="300px" rounded={10}>Sign in with Google</Button>
        </>
        
            }
        </VStack>
        
    );
    

    
};

export default SetupProfilePage;
