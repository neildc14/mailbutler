import React from "react";
import { Stack, Flex, Center, Image, Text } from "@chakra-ui/react";
import check from "../assets/icons/check.png";

function PerksHilghlights({ children, text, highlighted_text }) {
  return (
    <Flex direction="row" alignItems="center" py={2} gap={2}>
      <Image src={check} boxSize="1rem" />
      <Center>
        <Text>
          {text} <Text as="u">{highlighted_text}</Text>
        </Text>
      </Center>
    </Flex>
  );
}

export default PerksHilghlights;
