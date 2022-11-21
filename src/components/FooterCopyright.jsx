import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import FooterRight from "./FooterRight";

function FooterCopyright() {
  return (
    <Box
      py={{ sm: 10, md: 2 }}
      px={{ base: 8, lg: 16 }}
      bgColor="#464646"
      color="white"
    >
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
