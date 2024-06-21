import { Button,VStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

const SetupProfilePage = () => {
    const interests = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];
    const hobbies = ['Gardening', 'Photography', 'Cooking', 'Gaming', 'Crypto', 'Soccer', 'Yoga'];
    const {data: session, status} = useSession()
    if (status === 'loading') return <p>Loading...</p>
     
    return (
    
        <VStack spacing={4} p={5}>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">Setup Profile</Text>
            <button onClick={() => signOut()}>Sign out</button>
            {/* <p>Signed in as {session.user.email}</p> */}
            {session?  
            <>
            
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
            </>          
            :
        <>
        Not signed in <br/>
        <Button onClick={()=> signIn('google')} leftIcon={<FaGoogle />} colorScheme="blue" variant="solid" size="lg" width="300px" rounded={10}>Connect with Google</Button>
        </>
        
            }
        </VStack>
        
    );
    

    
};

export default SetupProfilePage;
