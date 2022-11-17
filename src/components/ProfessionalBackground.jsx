import React from "react";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import dots from "../assets/icons/dots.png";

function ProfessionalBackground({ profile, name, position, story, bg_color }) {
  return (
    <Box
      mt={12}
      mb={4}
      mx="auto"
      maxWidth="xs"
      borderRadius="2xl"
      bg={bg_color}
      position="relative"
      boxShadow=" 20px 20px 60px #d9d9d9,
             -20px -20px 60px #e7e7e7"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Image
          src={profile}
          boxSize="8rem"
          sx={{ position: "absolute", top: -10 }}
        />
        <Box mt={20} p={8}>
          <Heading as="h3" fontSize="xl" pb={6}>
            {name}
          </Heading>
          <Heading as="h4" pb={8} fontSize="lg">
            {position}
          </Heading>
          <Text pb={8} textAlign="justify">
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
        <Image src={dots} pb={4} />
      </Flex>
    </Box>
  );
}

export default ProfessionalBackground;
