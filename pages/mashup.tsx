import { Box, VStack, Heading, Text, Button, SimpleGrid, Center, Image } from '@chakra-ui/react';
import React, {  useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase/firebaseConfig';
import { MagicSpinner,TraceSpinner, GooSpinner } from "react-spinners-kit";




import NextLink from 'next/link';

const ColleagueMashupPage = () => {
    const [image, setImage] = useState<string | null>();
    const [ids, setIds] = useState<string[]>([]);
    const [prompt, setPrompt] = useState<string>();
    const [pageImage, setPageImage] = useState<string>();


    const hobbies = [
        { title: 'Photography', details: 'Travel enthusiast, Album link' },
        { title: 'Painting', details: 'Art lover, Gallery link' },
        { title: 'Sports', details: 'Fitness fanatic, Workout routine' }
    ];

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "users", "listOfIds");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data().ids);
                setIds(docSnap.data().ids);
            } else {
                console.log("No such document!");
            }
        };
        fetchData();
    }, []);
    
    // New useEffect that depends on `ids`
    useEffect(() => {
        if (ids && ids.length > 0) {
            const randomId = generateRandomId();
            getUser(randomId);
        }
    }, [ids]);  // This useEffect triggers only when `ids` changes

    useEffect(() => {
        if (!image) {
            console.log("Image is null, skipping fetch");
            return; // This prevents the effect from running when image is null
        }
        console.log(image)
        console.log(localStorage.getItem('capturedImage'))
        fetch('/api/retrieve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageLocal: localStorage.getItem('capturedImage'),
                imageRemote: image,
                size: "256x256"
            })
        }
        ).then((res) => res.json()).then((data) => {

            console.log(data.message.content)
            setPrompt(data.message.content);
        })
      },[image])



    useEffect( ()  => {
        if (!prompt) {
            console.log("prompt is null, skipping fetch");
            return; // This prevents the effect from running when prompt is null
        }
        fetch('/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1,
                size: "1024x1024"
            })
        }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data && data.result.url) {
                setPageImage(data.result.url);
            }

        })
      }, [prompt])
    async function getUser(id: string) {
        const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                
                console.log("Document data:", docSnap.data());
                setImage(docSnap.data().image);

              } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
              }
    }

    function generateRandomId() {        
        const len = ids.length;
        const randomNumber = Math.floor(Math.random() * len);
        const randomId = ids[randomNumber];
        return randomId;
    }

    return (
        <VStack spacing={4} p={4}>
            
            <Center  height={"400px"} width={"400px"} mb={4}>{pageImage? 
        

      <Image src={pageImage} alt="Mashup" />  : <GooSpinner size={100} color="#686769"/>}</Center>
      
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
            <NextLink href='/connect'>
            <Button bg="black" _hover={{ bg: 'black' }} mt={4} rounded={10} width="300px" color="white" variant="solid" size="lg">Continue</Button>
            </NextLink>
        </VStack>
    );
};

export default ColleagueMashupPage;
