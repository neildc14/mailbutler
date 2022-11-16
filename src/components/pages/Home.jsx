import React from "react";

import { Container, Box } from "@chakra-ui/react";
import Header from "../layouts/Header";
import Hero from "../Hero";
import Reviews from "../Reviews";
import FeatureHeading from "../SecondHeading";
import MainFeatures from "../MainFeatures";
import CardFeatures from "../CardFeatures";

function Home() {
  return (
    <Container px={0} width="100%">
      <Header />
      <Hero />
      <Reviews />
      <FeatureHeading />
      <MainFeatures />
      <CardFeatures />
    </Container>
  );
}

export default Home;
