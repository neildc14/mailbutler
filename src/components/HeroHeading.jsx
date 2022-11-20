import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function HeroHeading() {
  return (
    <Box as="section">
      <Heading
        as="h1"
        size="xl"
        mb={4}
        fontWeight="400"
        fontSize={{ base: "3xl", lg: "2.6rem" }}
      >
        <Text as="b" textTransform="uppercase" fontWeight="extrabold">
          Enhance your
        </Text>{" "}
        business email communication with additional features for your inbox
      </Heading>
    </Box>
  );
}
