import React from "react";
import { SocialIcon } from "react-social-icons";
import { Box, HStack, Link, Text, IconButton } from "@chakra-ui/react";
import Mailbutler from "./Mailbutler";
import SocialMediaButton from "./buttons/SocialMediaButton";

function FooterSocmed() {
  return (
    <Box mb={8} maxWidth={{ lg: "25%" }}>
      <Box mb={4}>
        <Mailbutler />
      </Box>

      <Text mb={4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,{" "}
      </Text>
      <HStack spacing={2}>
        <SocialMediaButton url="https://facebook.com" />
        <SocialMediaButton url="https://instagram.com" />
        <SocialMediaButton url="https://twitter.com" />
        <SocialMediaButton url="https://youtube.com" />
      </HStack>
    </Box>
  );
}

export default FooterSocmed;
