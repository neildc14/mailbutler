import React from "react";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";

function Header() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Container as="header" maxW="container.full" px={{ base: 8, lg: 16 }}>
      <Box h={20} pt={4}>
        {isLargerThan800 ? <DesktopNav /> : <MobileNav />}
      </Box>
    </Container>
  );
}

export default Header;
