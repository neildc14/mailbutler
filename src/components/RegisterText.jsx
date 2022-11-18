import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import CTA from "./buttons/CTA";

function RegisterText() {
  return (
    <Box px={10} py={8}>
      <Box>
        <Heading as="h2" fontSize="2xl" pb={8}>
          Made in Germany, but used all around the world by more than 113,000
          customers
        </Heading>
        <Text pb={4}>
          We offer digital German craftsmanship for your everday email
          communication.
        </Text>
        <Text pb={4}>
          Whether you want to use it personal or professionell, our goal is to
          boost the productivity of your email program. No need to learn
          something new. Just use the software you're used to and enjoy our
          Features for more productivity and control.
        </Text>
      </Box>
      <Box>
        <CTA
          caption="Who we are"
          size="md"
          bgColor="white"
          hoverBgColor="#51A387"
          textColor="#51A387"
          hoverTextColor="white"
          btnBorderColor="#51A387"
          variant="outline"
        />
      </Box>
    </Box>
  );
}

export default RegisterText;
