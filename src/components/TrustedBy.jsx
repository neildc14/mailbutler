import React from "react";
import { Container, Heading, SimpleGrid, Image } from "@chakra-ui/react";
import ably from "../assets/icons/ablyio-ar21 1.png";
import docz from "../assets/icons/doczsite-ar21 1 (1).png";
import appoptics from "../assets/icons/appoptics-ar21 1.png";
import getform from "../assets/icons/getformio-ar21 1.png";
import unito from "../assets/icons/unito-ar21 1.png";

function TrustedBy() {
  return (
    <Container as="section" pt={8} px={8}>
      <Heading as="h2" pb={8} textAlign="center" fontSize="2xl">
        Trusted By
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing="10px">
        <Image src={ably}    />
        <Image src={docz} w={120} />
        <Image src={appoptics} w={120} />
        <Image src={getform} w={120} />
        <Image src={unito} w={120} />
      </SimpleGrid>
    </Container>
  );
}

export default TrustedBy;
