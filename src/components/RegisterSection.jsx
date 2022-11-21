import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import RegisterText from "./RegisterText";
import RegisterForm from "./RegisterForm";

function RegisterSection() {
  return (
    <Container
      as="section"
      maxW="container.full"
      py={8}
      px={{ base: 0, lg: 8 }}
    >
      <Flex
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box
          width={{ md: "50%", lg: "45%" }}
          alignSelf={{ md: "center", lg: "center" }}
        >
          <RegisterText />
        </Box>
        <Box width={{ md: "50%", lg: "45%" }}>
          <RegisterForm />
        </Box>
      </Flex>
    </Container>
  );
}

export default RegisterSection;
