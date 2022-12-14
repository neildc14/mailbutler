import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
function FeatureHeading() {
  return (
    <Container
      as="section"
      maxW="container.full"
      px={{ base: 8, lg: 16 }}
      mt={8}
      textAlign="center"
    >
      <Heading as="h2" fontSize={{ base: "2xl", lg: "2xl" }}>
        No need to learn something new
      </Heading>
      <Text pt={4} fontSize={{ base: "sm" }}>
        Our Email Tracking seamlessly integrates with your favourite Email
        Client and is super easy to use.
      </Text>
    </Container>
  );
}

export default FeatureHeading;
