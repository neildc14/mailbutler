import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

import star from "../assets/images/star.png";

function Reviewer({ img, store }) {
  return (
    <Flex mb={4} gap={8} alignItems="center">
      <Image src={img} boxSize="3rem" />
      <Flex flexDirection="column">
        <Image src={star} w={12} h={4} />
        <Text
          as="u"
          fontSize={{ base: "md", md: "sm", lg: "xs" }}
          fontWeight="bold"
          letterSpacing="1px"
        >
          {store}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Reviewer;
