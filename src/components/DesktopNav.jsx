import React from "react";
import Nav from "./layouts/Nav";
import Mailbutler from "./Mailbutler";
import { Flex, Center, Spacer, Stack } from "@chakra-ui/react";
import CTA from "./buttons/CTA";

function DesktopNav() {
  return (
    <Flex alignItems="center">
      <Mailbutler />
      <Spacer />
      <Stack direction="row">
        <Center gap={6}>
          <Nav direction="row" spacing={6} />
          <CTA caption="Try for free" />
        </Center>
      </Stack>
    </Flex>
  );
}

export default DesktopNav;
