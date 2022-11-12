import React from "react";
import { Box, Center } from "@chakra-ui/react";
import MobileNav from "../MobileNav";

function Header() {
  return (
    <Box h={20} pt={4}>
      <MobileNav />
    </Box>
  );
}

export default Header;
