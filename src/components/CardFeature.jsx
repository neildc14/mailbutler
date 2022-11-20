import React from "react";
import { Box, Image, AspectRatio } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/card";
import InfoFeature from "./info/InfoFeature";
import ReadMoreBtn from "../components/buttons/ReadMore";

function CardFeature({ icon, heading, text }) {
  return (
    <Card
      w={{ sm: "18rem", lg: "16rem" }}
      mx="auto"
      pt={6}
      pb={10}
      px={4}
      position="relative"
      bg=" #FEFEFE"
      borderRadius="lg"
      boxShadow="3px 9px 33px -4px rgba(0,0,0,0.43)"
    >
      <CardBody height={{ base: "16rem" }}>
        <Image src={icon} alt="mail icon" boxSize="3rem" />
        <Box py={8}>
          <InfoFeature heading={heading} text={text} />
        </Box>
        <Box position="absolute" bottom="1">
          <ReadMoreBtn />
        </Box>
      </CardBody>
    </Card>
  );
}

export default CardFeature;
