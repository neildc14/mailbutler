import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import CTA from "./buttons/CTA";

function Perks({
  heading,
  children,
  caption,
  btnSize,
  bgColor,
  textColor,
  hoverBgColor,
  btnBorderColor,
  btnVariant,
}) {
  return (
    <Box my={8}>
      <Heading as="h3" fontSize="xl">
        {heading}
      </Heading>
      <Box mt={4}>{children}</Box>
      <Box mt={4}>
        <CTA
          caption={caption}
          size={btnSize}
          bgColor={bgColor}
          hoverBgColor={hoverBgColor}
          textColor={textColor}
          borderColor={btnBorderColor}
          variant={btnVariant}
        />
      </Box>
    </Box>
  );
}

export default Perks;
