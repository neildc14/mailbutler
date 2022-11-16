import React from "react";
import { Heading, Text } from "@chakra-ui/react";
function InfoFeature({ heading, text }) {
  return (
    <>
      <Heading as="h3" mb={2} fontSize="2xl" textAlign="left">
        {heading}
      </Heading>
      <Text fontSize="base">{text}</Text>
    </>
  );
}

export default InfoFeature;
