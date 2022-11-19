import React from "react";
import { Flex, Container } from "@chakra-ui/react";
import CardFeature from "./CardFeature";
import { cardDetails } from "../data/cardDetails";

function CardFeatures() {
  return (
    <Container as="section" maxW="container.xl" px={8} pt={8}>
      <Flex flexDirection="column" gap={6}>
        {cardDetails?.map((card, i) => (
          <CardFeature
            key={i}
            icon={card.icon}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </Flex>
    </Container>
  );
}

export default CardFeatures;
