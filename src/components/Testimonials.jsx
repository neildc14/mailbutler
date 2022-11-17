import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import PerksLiviu from "./PerksLiviu";
import PerksLemione from "./PerksLemione";

function Testimonials() {
  return (
    <Container pt={8} px={8}>
      <Flex flexDirection="column">
        <PerksLiviu />
      </Flex>
      <PerksLemione />
    </Container>
  );
}

export default Testimonials;
