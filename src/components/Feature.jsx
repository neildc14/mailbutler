import React from "react";
import { Box, Image, Heading, Text, Button, Flex } from "@chakra-ui/react";

function Feature({ background, icon, heading, text }) {
  return (
    <Box>
      <Box
        sx={{
          display: "inline-block",
          position: "relative",
          height: "8rem",
          width: "4rem",
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
          {/* <Heading as="h3" mb={2} fontSize="2xl" textAlign="center">
          {heading}
        </Heading>
        <Text fontSize="base">{text}</Text> */}
          {/* <Button
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
        </Button> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Feature;
