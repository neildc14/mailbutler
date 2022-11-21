import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Form from "./Form";

function RegisterForm() {
  return (
    <Box
      bg="#96CEBC"
      px={{ base: 10, lg: 10 }}
      py={{ base: 8, lg: 10 }}
      borderRadius={{ lg: "37% 75% 34% 67% / 67% 26% 74% 33% " }}
    >
      <Box
        width={{ lg: "80%" }}
        height={{ lg: "1000%" }}
        mt={{ lg: 8 }}
        mx="auto"
        textAlign="center"
      >
        <Heading as="h2" fontSize={{ base: "2xl" }} pb={4}>
          Register now and try Mailbutler 14 days for free
        </Heading>
        <Text fontSize={{ base: "base", lg: "sm" }}>
          No credit card required, install and uninstall within seconds, all
          data will be saved GDPR compliant, 100 % integrated into your Email
          Client
        </Text>
        <Form />
      </Box>
    </Box>
  );
}

export default RegisterForm;
