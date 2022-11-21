import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import dots from "../assets/icons/dots.png";
import LinkTo from "./LinkTo";

function DesktopProfessionalBackground({
  bgImage,
  profile,
  name,
  position,
  story,
  bg_color,
}) {
  return (
    <Box
      width="100%"
      mb={16}
      pb={4}
      bgColor={bg_color}
      sx={{
        borderRadius: "42% 58% 45% 59% / 31% 54% 51% 75% ",
        boxShadow: " 5px 5px 10px #d9d9d9,-5px -5px 10px #e7e7e7",
      }}
    >
      <Flex flexDirection="row" gap={4} w="80%" mx="auto" pt={16} pb={4}>
        <Image src={profile} boxSize="6rem" />
        <Box>
          <Heading as="h3" fontSize="xl" pb={6}>
            {name}
          </Heading>
          <Heading as="h4" pb={8} fontSize="lg">
            {position}
          </Heading>
          <Text pb={8} textAlign="justify" fontSize={{ base: "md", lg: "sm" }}>
            {story}
          </Text>
          <LinkTo
            fontWeight="semibold"
            _hover={{ textDecoration: "underline" }}
            aria-label="read full story"
            link_name="Read full story"
          />
        </Box>
      </Flex>
      <Image src={dots} pb={4} mx="auto" />
    </Box>
  );
}

export default DesktopProfessionalBackground;
