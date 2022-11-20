import React from "react";
import { Heading, Text } from "@chakra-ui/react";
function InfoFeature({ heading, text }) {
  return (
    <>
      <Heading as="h3" mb={2} fontSize={{ lg: "lg" }} textAlign="left">
        {heading}
      </Heading>
      <Text fontSize={{ sm: "base", md: "sm", lg: "sm" }}>{text}</Text>
    </>
  );
}

export default InfoFeature;
