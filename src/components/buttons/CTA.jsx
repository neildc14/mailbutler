import React from "react";
import { Link, Button } from "@chakra-ui/react";

function CTA({ caption, height = 8, px = 4 }) {
  return (
    <Button
      as="a"
      h={height}
      px={px}
      borderRadius="full"
      bgColor="brand.primary"
      _hover={{ bgColor: "blue.700" }}
      cursor="pointer"
      color="white"
      letterSpacing={2}
      aria-label="Click try for free"
    >
      {caption}
    </Button>
  );
}

export default CTA;
