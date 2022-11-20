import React from "react";
import CTA from "./buttons/CTA";
import outlook from "../assets/images/outlook.png";
import mailios from "../assets/images/mailios.png";
import gmail from "../assets/images/gmail.png";
import { Box, Text, Stack, Link, Image } from "@chakra-ui/react";

export default function HeroMailings() {
  return (
    <Box as="section">
      <Text as="p">For your current Email client</Text>
      <Box mt={4}>
        <Stack direction="row" spacing={8} _hover={{ bg: "none" }}>
          <Link p={0} aria-label="Click to open outlook account">
            <Image src={outlook} boxSize="3rem" />
          </Link>
          <Link p={0} aria-label="Click to open gmail account">
            <Image src={gmail} />
          </Link>
          <Link p={0} aria-label="Click to open mailIOS account">
            <Image src={mailios} boxSize="3rem" />
          </Link>
        </Stack>
        <Box display="inline-block">
          <Stack
            mt={8}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <CTA caption="Try 14 days for Free" height={10} px={8} />
            <Text as="p">No credit card required</Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
