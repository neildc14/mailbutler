import React from "react";
import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import Feature from "./Feature";
import { featureDetails } from "../data/featureDetails";
import MobileFeature from "./MobileFeature";

function MainFeatures() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container as="section" maxW="container.xl" px={8} pt={8}>
      <Flex flexDirection="column" justifyContent="space-between" width="100%">
        {isLargerThan800
          ? featureDetails?.map((feature, i) => (
              <Feature
                key={i}
                background={feature.background}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))
          : featureDetails?.map((feature, i) => (
              <MobileFeature
                key={i}
                background={feature.background}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
      </Flex>
    </Container>
  );
}

export default MainFeatures;
