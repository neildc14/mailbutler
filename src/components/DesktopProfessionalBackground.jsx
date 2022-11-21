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
          <Link
            fontWeight="semibold"
            _hover={{ texDecoration: "underline" }}
            aria-label="read full story"
          >
            Read full story
          </Link>
        </Box>
      </Flex>
      <Image src={dots} pb={4} mx="auto" />
    </Box>
  );
}

export default DesktopProfessionalBackground;
