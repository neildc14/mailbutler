import React from "react";
import { Box, Text, Stack, Image, Link } from "@chakra-ui/react";
import appstore from "../assets/icons/appStore.png";
import googleplay from "../assets/icons/google-play-badge 1 (1).png";

function FooterCopyright() {
  return (
    <Box py={10} px={8} bgColor="#464646" color="white">
      <Text mb={4}>© COPYRIGHT MAILBUTLER.COM</Text>
      <Stack direction="column" alignItems="left" spacing={2} mb={4}>
        <Text>Imprint</Text>
        <Text>Privacy Policy</Text>
      </Stack>
      <Stack direction="row" alignItems="center">
        {[appstore, googleplay].map((app) => (
          <Link key={app} width="50%" maxWidth="400px">
            <Image src={app} height="3rem" />
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default FooterCopyright;
