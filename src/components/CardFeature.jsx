import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/card";
import InfoFeature from "./info/InfoFeature";
import ReadMoreBtn from "../components/buttons/ReadMore";

function CardFeature({ icon, heading, text }) {
  return (
    <Card
      maxW="sm"
      p={10}
      bg=" #FEFEFE"
      borderRadius="lg"
      boxShadow="3px 9px 33px -4px rgba(0,0,0,0.43)"
    >
      <CardBody>
        <Image src={icon} alt="mail icon" boxSize="3rem" />
        <Box pt={8}>
          <InfoFeature heading={heading} text={text} />
          <ReadMoreBtn />
        </Box>
      </CardBody>
    </Card>
  );
}

export default CardFeature;
