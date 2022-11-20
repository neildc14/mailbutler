import React, { useEffect } from "react";
import { Box, Image, AspectRatio, useMediaQuery } from "@chakra-ui/react";
import hero_bg from "../assets/images/hero_bg.png";

export default function HeroImage() {
  const [isMin992] = useMediaQuery("(min-width: 992px)");
  const [isMax800] = useMediaQuery("(max-width: 768px)");

  const tabletSize = window.screen.width >= 769 && window.screen.width <= 991;

  console.log(window.screen.width, tabletSize);
  return (
    <Box
      as="section"
      pb={10}
      mb={10}
      width={{ base: "100%", lg: "100%", xl: "100%" }}
    >
      {isMin992 && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={hero_bg}
            width="100%"
            aria-label="Image of a man sitting while using computer"
            alt="Image of a man sitting while using computer"
          />
        </AspectRatio>
      )}
      {tabletSize && (
        <AspectRatio ratio={1}>
          <Image
            src={hero_bg}
            width="100%"
            aria-label="Image of a man sitting while using computer"
            alt="Image of a man sitting while using computer"
          />
        </AspectRatio>
      )}
      {isMax800 && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={hero_bg}
            width="100%"
            aria-label="Image of a man sitting while using computer"
            alt="Image of a man sitting while using computer"
          />
        </AspectRatio>
      )}
    </Box>
  );
}
