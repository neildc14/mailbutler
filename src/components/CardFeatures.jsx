import React from "react";
import { Flex, Container, Grid } from "@chakra-ui/react";
import CardFeature from "./CardFeature";
import { cardDetails } from "../data/cardDetails";

function CardFeatures() {
  return (
    <Container as="section" maxW="container.xl" px={8} pt={16}>
      <Grid
        templateColumns={{ md: "repeat(2,1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
      >
        {cardDetails?.map((card, i) => (
          <CardFeature
            key={i}
            icon={card.icon}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default CardFeatures;
