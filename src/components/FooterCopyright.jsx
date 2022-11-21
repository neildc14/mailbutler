import React from "react";
import { Box, Text, Stack, Image, Link, Flex } from "@chakra-ui/react";
import appstore from "../assets/icons/appStore.png";
import googleplay from "../assets/icons/google-play-badge 1 (1).png";
import FooterRight from "./FooterRight";

function FooterCopyright() {
  return (
    <Box py={{ sm: 10, md: 2 }} px={8} bgColor="#464646" color="white">
      <Flex
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        alignItems={{ md: "end" }}
        justifyContent={{ md: "space-between" }}
      >
        <Text mb={4} fontSize={{ base: "sm" }}>
          © COPYRIGHT MAILBUTLER.COM
        </Text>
        <FooterRight />
      </Flex>
    </Box>
  );
}

export default FooterCopyright;
