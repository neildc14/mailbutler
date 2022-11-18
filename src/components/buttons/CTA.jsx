import React from "react";
import { Link, Button, Center } from "@chakra-ui/react";

function CTA({
  as = "a",
  type = "",
  caption,
  size = "sm",
  variant = "solid",
  borderColor = "brand.primary",
  bgColor = "brand.primary",
  hoverBgColor = "blue.700",
  textColor = "white",
  hoverTextColor = "white",
}) {
  return (
    <Button
      as={as}
      type={type}
      variant={variant}
      px={6}
      py={4}
      size={size}
      borderRadius="full"
      bgColor={bgColor}
      _hover={{ bgColor: hoverBgColor, color: hoverTextColor }}
      cursor="pointer"
      borderColor={borderColor}
      color={textColor}
      letterSpacing={2}
      aria-label="Click button"
    >
      <Center> {caption}</Center>
    </Button>
  );
}

export default CTA;
