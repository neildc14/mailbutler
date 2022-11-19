import React from "react";
import { Container, Box } from "@chakra-ui/react";
import FooterSocmed from "../FooterSocmed";
import FooterFeatures from "../FooterFeatures";
import FooterProduct from "../FooterProduct";
import FooterResources from "../FooterResources";
import FooterCopyright from "../FooterCopyright";

function Footer() {
  return (
    <Container as="section" px={0}>
      <Box px={8} pt={8}>
        <Box mt={8}>
          <FooterSocmed />
          <FooterFeatures />
          <FooterProduct />
          <FooterResources />
        </Box>
      </Box>
      <FooterCopyright />
    </Container>
  );
}

export default Footer;
