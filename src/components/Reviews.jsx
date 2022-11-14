import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Reviewer from "./Reviewer";
import AppStore from "../assets/images/app_store.png";
import GoogleChrome from "../assets/images/chrome.png";
import Outlook from "../assets/images/outlook.png";
import GDPR from "../assets/images/GDPR-badge.png";

function Reviews() {
  return (
    <Container px={8}>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Reviewer img={GoogleChrome} store="Chrome Webstore" />
        <Reviewer img={AppStore} store="MAC Appstore" />
        <Reviewer img={Outlook} store="Outlook Add-ons" />
        <Reviewer img={GDPR} store="GDPR COMPLIANT" />
      </Flex>
    </Container>
  );
}

export default Reviews;
