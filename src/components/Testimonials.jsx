import React from "react";
import { Container, Divider, Flex } from "@chakra-ui/react";
import PerksLiviu from "./PerksLiviu";
import PerksLemione from "./PerksLemione";
import ProfessionalBackground from "./ProfessionalBackground";
import LiviuProfile from "../assets/images/Avatar-8.png";
import LemioneProfile from "../assets/images/Avatar-12.png";

function Testimonials() {
  return (
    <Container as="section" pt={8} px={8}>
      <Flex flexDirection="column">
        <PerksLiviu />
        <ProfessionalBackground
          profile={LiviuProfile}
          name=" Liviu Tanase"
          position="Founder and CEO of ZeroBounce"
          story="  I use Mailbutler to help me track my emails and follow-ups. I can
            see when clients have opened a particular email on a certain
            time/day, for me that's invaluable as it helps me decide where to
            spend my time and when to follow-up."
          bg_color="#96CEBC"
        />
      </Flex>
      <Divider orientation="horizontal" p={4} height="1rem" />
      <Flex flexDirection="column">
        <PerksLemione />
        <ProfessionalBackground
          profile={LemioneProfile}
          name=" Lemoine Headley"
          position="Head Designer at Bumble"
          story=" I use Mailbutler to help me track my emails and follow-ups. 
          I can see when clients have opened a particular email on a certain time/day, 
          for me that's invaluable as it helps me decide where to spend my time and when to follow-up."
          bg_color="#96CEBC"
        />
      </Flex>
    </Container>
  );
}

export default Testimonials;
