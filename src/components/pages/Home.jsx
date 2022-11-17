import React from "react";

import { Container } from "@chakra-ui/react";
import Header from "../layouts/Header";
import Hero from "../Hero";
import Reviews from "../Reviews";
import FeatureHeading from "../SecondHeading";
import MainFeatures from "../MainFeatures";
import CardFeatures from "../CardFeatures";
import TrustedBy from "../TrustedBy";
import Testimonials from "../Testimonials";

function Home() {
  return (
    <Container px={0} width="100%">
      <Header />
      <Hero />
      <Reviews />
      <FeatureHeading />
      <MainFeatures />
      <CardFeatures />
      <TrustedBy />
      <Testimonials />
    </Container>
  );
}

export default Home;
