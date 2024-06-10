import { Box, Button, VStack, InputGroup, Input, InputRightElement, Text, Link } from '@chakra-ui/react';

const EmailValidationPage = () => {
    return (
        <VStack spacing={4}  p={5} height="100vh" justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">Email Validation</Text>
            
            <InputGroup >
                <Input placeholder=" " type="text" maxLength={1} />
                <Input placeholder=" " type="text" maxLength={1} />
                <Input placeholder=" " type="text" maxLength={1} />
                <Input placeholder=" " type="text" maxLength={1} />
            </InputGroup>

            <Button colorScheme="blackAlpha" size="lg">Submit</Button>
            <Text textAlign="center">
                Didn't receive the email code? <Link color="blue.500" href="#">Resend</Link>
            </Text>
        </VStack>
    );
};

export default EmailValidationPage;
