import React from "react";
import { Container, Divider, Flex, Box, useMediaQuery } from "@chakra-ui/react";
import PerksLiviu from "./PerksLiviu";
import PerksLemione from "./PerksLemione";
import ProfessionalBackground from "./ProfessionalBackground";
import LiviuProfile from "../assets/images/Avatar-8.png";
import LemioneProfile from "../assets/images/Avatar-12.png";
import DesktopProfessionalBackground from "./DesktopProfessionalBackground";
import ellipse10 from "../assets/images/Ellipse 10.png";

function Testimonials() {
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  return (
    <Container
      as="section"
      maxW="container.full"
      py={8}
      px={{ base: 8, lg: 16 }}
    >
      <Flex flexDirection={{ base: "column", md: "row", lg: "row" }} gap={10}>
        <Box width="100%" alignSelf={{ md: "center", lg: "start" }}>
          <PerksLiviu />
        </Box>
        {isLargerThan992 ? (
          <DesktopProfessionalBackground
            bgImage={ellipse10}
            profile={LiviuProfile}
            name=" Liviu Tanase"
            position="Founder and CEO of ZeroBounce"
            story="  I use Mailbutler to help me track my emails and follow-ups. I can
            see when clients have opened a particular email on a certain
            time/day, for me that's invaluable as it helps me decide where to
            spend my time and when to follow-up."
            bg_color="#96CEBC"
          />
        ) : (
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
        )}
      </Flex>

      {!isLargerThan992 && (
        <Divider orientation="horizontal" my={4} bgColor="gray.800" />
      )}

      <Flex
        flexDirection={{ base: "column", md: "row-reverse", lg: "row-reverse" }}
        gap={10}
      >
        <Box width="100%" alignSelf={{ md: "center", lg: "start" }}>
          <PerksLemione />
        </Box>
        {isLargerThan992 ? (
          <DesktopProfessionalBackground
            profile={LemioneProfile}
            name=" Lemoine Headley"
            position="Head Designer at Bumble"
            story=" To keep track of my emails and follow-ups, I use Mailbutler. I can see which emails my clients have opened on specific dates and times, which is useful to me because it guides my time management and when I should follow up."
            bg_color="#F6CC76"
          />
        ) : (
          <ProfessionalBackground
            profile={LemioneProfile}
            name=" Lemoine Headley"
            position="Head Designer at Bumble"
            story=" To keep track of my emails and follow-ups, I use Mailbutler. I can see which emails my clients have opened on specific dates and times, which is useful to me because it guides my time management and when I should follow up."
            bg_color="#F6CC76"
          />
        )}
      </Flex>
    </Container>
  );
}

export default Testimonials;
