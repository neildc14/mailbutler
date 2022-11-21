import React from "react";
import { Container, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import FooterSocmed from "../FooterSocmed";
import FooterFeatures from "../FooterFeatures";
import FooterProduct from "../FooterProduct";
import FooterResources from "../FooterResources";
import FooterCopyright from "../FooterCopyright";
import FooterCompany from "../FooterCompany";

function Footer() {
  return (
    <Container as="section" maxW="container.full" px={0} bgColor="#a5d5c866">
      <Box px={{ base: 8, lg: 16 }} pt={8}>
        <Box mt={8}>
          <Flex
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            justifyContent={{ lg: "space-evenly" }}
            gap={4}
          >
            <FooterSocmed />
            <FooterFeatures />
            <FooterProduct />
            <FooterResources />
            <FooterCompany />
          </Flex>
        </Box>
      </Box>
      <FooterCopyright />
    </Container>
  );
}

export default Footer;
