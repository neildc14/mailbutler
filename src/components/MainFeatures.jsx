import React from "react";
import {
  Container,
  Flex,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import Feature from "./Feature";
import { featureDetails } from "../data/featureDetails";
import MobileFeature from "./MobileFeature";

function MainFeatures() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container
      as="section"
      maxW="container.full"
      px={{ base: 8, lg: 16 }}
      pt={8}
    >
      {!isLargerThan800 && (
        <Flex flexDirection="column" justifyContent="space-between">
          {featureDetails?.map((feature, i) => (
            <MobileFeature
              key={i}
              background={feature.background}
              icon={feature.icon}
              heading={feature.heading}
              text={feature.text}
            />
          ))}
        </Flex>
      )}
      {isLargerThan800 && (
        <Grid
          templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(4,1fr)" }}
          templateRows={{ md: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
          gap={4}
        >
          {featureDetails?.map((feature, i) => (
            <GridItem key={i}>
              <Feature
                background={feature.background}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default MainFeatures;
