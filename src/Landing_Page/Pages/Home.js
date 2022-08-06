import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import StepOne from '../Cards/StepOne';
import { Box, Text, Button, HStack } from '@chakra-ui/react';
import StepThree from '../Cards/StepThree'
import StepTwo from '../Cards/StepTwo';
import { Stack } from '@chakra-ui/react';

function Home() {
  return (
    <Box>
      <NavBar />
      <Box>
        <Text
          mt="5"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="150"
          ml="500"
          color="#000000"
        >
          Amo
        </Text>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="24"
          textAlign="center"
          color="#000000"
        >
          Get paid part of your salary at any point during the month
        </Text>

        <Button colorScheme="green" size="lg" ml="550" mt="50">
          Partner with us
        </Button>
        <Text
          ml="30"
          mt="34"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontsize="32"
          textAlign="center"
          color="#000000"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          Employee Benefits
        </Text>

        <Text
          position="absolute"
          FontWidth="353"
          ml="48"
          mt="100"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="24"
          textAlign="center"
          color="#000000"
        >
          % <br />
          0% interest <br />
          We offer no interest on payments
        </Text>
        <Text
          position="absolute"
          Fontwidth="391"
          ml="570"
          mt="100"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="20"
          textAlign="center"
          color="#000000"
        >
          ()
          <br /> Hassle Free
          <br /> There is no paper work required, zero stress
        </Text>
      </Box>
      <Text
        position="absolute"
        FontWidth="407"
        ml="100"
        mt="250"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="24"
        textAlign="center"
        color="#000000"
      >
        % <br />
        Fixed transaction fee <br />
        Employees only pay a fixed transaction fee
      </Text>
      <Text
        position="absolute"
        fontWidth="391"
        ml="570"
        mt="250"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="20"
        textAlign="center"
        color="#000000"
      >
        () <br /> Simple and quick <br />
        Get paid on the same day
      </Text>
      <Text
        position="absolute"
        fontwidth="308"
        ml="550"
        mt="450"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="36"
        textAlign="center"
        color="#000000"
      >
        How it works
      </Text>
      <Stack mt="550" spacing={'50px'} alignItems={'center'}>
        <HStack spacing="24px">
          <StepOne />
          <StepTwo />
          <StepThree />
        </HStack>
      </Stack>

      <Box mt="100">
        <Footer />
      </Box>
    </Box>
  );
}

export default Home;
