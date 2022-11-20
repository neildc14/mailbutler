import React from "react";
import { Box, Image, Heading, Text, AspectRatio } from "@chakra-ui/react";
import ReadMoreBtn from "./buttons/ReadMore";

function Feature({ background, icon, heading, text }) {
  return (
    <AspectRatio ratio={1} maxW="20rem" mx="auto">
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url('${background}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          transition: "transform .2s",
        }}
      >
        <Box
          m="auto"
          width="50%"
          position="absolute"
          lineHeight="base"
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={icon}
            mx="auto"
            mb={4}
            boxSize={{ md: "2rem", lg: "3rem" }}
          />
          <Heading as="h3" mb={2} fontSize={{ lg: "lg" }}>
            {heading}
          </Heading>
          <Text fontSize={{ lg: "sm" }}>{text}</Text>
          <ReadMoreBtn />
        </Box>
      </Box>
    </AspectRatio>
  );
}

export default Feature;
