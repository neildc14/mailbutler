import React from "react";
import { Box, Container } from "@chakra-ui/react";
import MobileNav from "../MobileNav";

function Header() {
  return (
    <Container as="header" px={8}>
      <Box h={20} pt={4}>
        <MobileNav />
      </Box>
    </Container>
  );
}

export default Header;
