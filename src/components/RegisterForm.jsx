import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Form from "./Form";

function RegisterForm() {
  return (
    <Box bg="#96CEBC" px={10} py={8}>
      <Box textAlign="center">
        <Heading as="h2" fontSize="2xl" pb={4}>
          Register now and try Mailbutler 14 days for free
        </Heading>
        <Text>
          No credit card required, install and uninstall within seconds, all
          data will be saved GDPR compliant, 100 % integrated into your Email
          Client
        </Text>
      </Box>
      <Form />
    </Box>
  );
}

export default RegisterForm;
