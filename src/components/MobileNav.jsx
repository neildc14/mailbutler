import React from "react";
import {
  Stack,
  Flex,
  Center,
  Spacer,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nav from "./layouts/Nav";
import Mailbutler from "../icons/Mailbutler";
import CTA from "./buttons/CTA";

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <React.Fragment>
      <Flex alignItems="center">
        <Mailbutler />
        <Spacer />
        <Stack direction="row" spacing={4}>
          <Center>
            <CTA caption="Try for free" />
            <Button p={0} variant="ghost" onClick={onOpen}>
              <HamburgerIcon w={8} h={8} />
            </Button>
          </Center>
        </Stack>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Nav direction="column" spacing={6} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
}

export default MobileNav;
