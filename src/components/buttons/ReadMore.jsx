import React from "react";
import { Button, Center } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

function ReadMoreBtn() {
  return (
    <Button
      display="inline-block"
      as="a"
      variant="ghost"
      mt={4}
      p={0}
      gap={2}
      fontSize="sm"
      _active={{ bg: "none" }}
      _hover={{ bg: "none" }}
      cursor="pointer"
      aria-label="read more"
      rightIcon={<ArrowRightIcon />}
    >
      Read More
    </Button>
  );
}

export default ReadMoreBtn;
