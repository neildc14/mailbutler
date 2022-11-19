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
import IntegratedApps from "../IntegratedApps";
import RegisterSection from "../RegisterSection";
import Footer from "../layouts/Footer";

function Home() {
  return (
    <Container px={0} width="100%" maxW="container.xl" height="100vh">
      <Header />
      <Hero />
      <Reviews />
      <FeatureHeading />
      <MainFeatures />
      <CardFeatures />
      <TrustedBy />
      <Testimonials />
      <IntegratedApps />
      <RegisterSection />
      <Footer />
    </Container>
  );
}

export default Home;
