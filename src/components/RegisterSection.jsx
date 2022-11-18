import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import RegisterText from "./RegisterText";
import RegisterForm from "./RegisterForm";

function RegisterSection() {
  return (
    <Container as="section" py={8} px="0">
      <Flex flexDirection="column">
        <RegisterText />
        <RegisterForm />
      </Flex>
    </Container>
  );
}

export default RegisterSection;
