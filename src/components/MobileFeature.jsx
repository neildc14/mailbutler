import React from "react";
import { Box, Image, Flex, Spacer, Stack } from "@chakra-ui/react";

import ReadMoreBtn from "./buttons/ReadMore";
import InfoFeature from "./info/InfoFeature";

function MobileFeature({ background, icon, heading, text }) {
  return (
    <Stack direction="row" mb={8}>
      <Box
        sx={{
          display: "inline-block",
          position: "relative",
          height: "10rem",
          width: "6rem",
          backgroundImage: `url('${background}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          transition: "transform .2s",
        }}
      >
        <Box
          m="auto"
          width="70%"
          position="absolute"
          lineHeight="base"
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image src={icon} mx="auto" mb={4} boxSize="2rem" />
        </Box>
      </Box>
      <Spacer />
      <Flex flexDirection="column" maxWidth="70%">
        <InfoFeature heading={heading} text={text} />
        <ReadMoreBtn />
      </Flex>
    </Stack>
  );
}

export default MobileFeature;
