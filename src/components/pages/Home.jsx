import React from "react";

import { Container } from "@chakra-ui/react";
import Header from "../layouts/Header";
import Hero from "../Hero";
import Reviews from "../Reviews";

function Home() {
  return (
    <Container px={0}>
      <Header />
      <Hero />
      <Reviews />
    </Container>
  );
}

export default Home;
