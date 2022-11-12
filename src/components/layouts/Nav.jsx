import React from "react";
import { Stack, Box, Link } from "@chakra-ui/react";

function Nav({ direction, spacing }) {
  return (
    <Stack direction={direction} spacing={spacing}>
      <Link>Features</Link>
      <Link>Pricing</Link>
      <Link>About Us</Link>
      <Link>Knowledgebase</Link>
    </Stack>
  );
}

export default Nav;
