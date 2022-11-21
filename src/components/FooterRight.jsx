import React from "react";
import { Box, Text, Stack, Image, Link, Flex } from "@chakra-ui/react";
import appstore from "../assets/icons/appStore.png";
import googleplay from "../assets/icons/google-play-badge 1 (1).png";

function FooterRight() {
  return (
    <Box>
      <Flex
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        gap={4}
        alignItems={{ md: "end" }}
      >
        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          alignItems="start"
          spacing={2}
          mb={4}
          fontSize={{ base: "sm" }}
        >
          <Link>Imprint</Link>
          <Link>Privacy Policy</Link>
        </Stack>
        <Stack
          direction="row"
          alignItems={{ base: "center", md: "start" }}
          maxWidth={{ sm: "400px" }}
        >
          {[appstore, googleplay].map((app) => (
            <Link key={app} width={{ sm: "50%" }}>
              <Image src={app} height="3rem" />
            </Link>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}

export default FooterRight;
