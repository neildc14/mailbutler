import React from "react";

import { Container, Box } from "@chakra-ui/react";
import Header from "../layouts/Header";
import Hero from "../Hero";
import Reviews from "../Reviews";
import FeatureHeading from "../SecondHeading";
import MainFeatures from "../MainFeatures";

function Home() {
  return (
    <Container px={0} width="100%">
      <Header />
      <Hero />
      <Reviews />
      <FeatureHeading />
      <MainFeatures />
    </Container>
  );
}

export default Home;
