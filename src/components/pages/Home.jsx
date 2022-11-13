import React from "react";

import { Container } from "@chakra-ui/react";
import Header from "../layouts/Header";
import Hero from "../Hero";

function Home() {
  return (
    <Container px={0}>
      <Container px={8}>
        <Header />
      </Container>
      <Hero />
    </Container>
  );
}

export default Home;
