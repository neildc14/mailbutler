import { Heading, Box, VStack, Link } from "@chakra-ui/react";
import React from "react";

function FoooterNav({ heading, links }) {
  return (
    <Box mb={8}>
      <Heading
        as="h3"
        mb={4}
        _after={{
          content: '""',
          borderBottom: "3px solid #51A387",
          width: "4.5rem",
          display: "block",
        }}
        _hover={{ "::after": '  width: "5.5rem",' }}
        fontSize="xl"
        letterSpacing="widest"
      >
        {heading}
      </Heading>
      <VStack spacing={2} alignItems="left">
        {links?.map((link, i) => (
          <Link key={i} href="#" textAlign="left">
            {link}
          </Link>
        ))}
      </VStack>
    </Box>
  );
}

export default FoooterNav;
