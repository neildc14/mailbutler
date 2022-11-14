import React from "react";

import { Container, Box } from "@chakra-ui/react";
import Header from "../layouts/Header";
import Hero from "../Hero";
import Reviews from "../Reviews";
import SecondHeading from "../SecondHeading";
import MainFeatures from "../MainFeatures";

function Home() {
  return (
    <Container px={0} width="100%">
      <Header />
      <Hero />
      <Reviews />
      <SecondHeading />
      <MainFeatures />
    </Container>
  );
}

export default Home;
