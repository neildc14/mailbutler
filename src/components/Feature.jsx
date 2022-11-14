import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

function Feature({ background, icon, heading, text }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "23rem",
        width: "60rem",
        backgroundImage: `url('${background}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain",
      }}
    >
      <Box
        m="auto"
        maxWidth="10rem"
        position="absolute"
        lineHeight="tall"
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image src={icon} mx="auto" mb={4} boxSize="3rem" />
        <Heading as="h3" mb={2} fontSize="2xl" textAlign="center">
          {heading}
        </Heading>
        <Text fontSize="base">{text}</Text>
        <Button
          as="a"
          variant="ghost"
          mt={2}
          p={0}
          gap={2}
          fontSize="sm"
          _active={{ bg: "none" }}
          _hover={{ bg: "none" }}
          aria-label="read more"
          rightIcon={<ArrowRightIcon />}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}

export default Feature;
