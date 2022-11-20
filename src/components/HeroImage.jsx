import React from "react";
import { Box, Image } from "@chakra-ui/react";
import hero_bg from "../assets/images/hero_bg.png";

export default function HeroImage() {
  return (
    <Box
      as="section"
      pb={10}
      mb={10}
      width={{ base: "100%", lg: "100%", xl: "100%" }}
    >
      <Image
        src={hero_bg}
        height={{ base: "20rem", lg: "70vh" }}
        width="100%"
        aria-label="Image of a man sitting while using computer"
        alt="Image of a man sitting while using computer"
      />
    </Box>
  );
}
