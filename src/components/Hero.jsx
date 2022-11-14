import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import outlook from "../assets/images/outlook.png";
import mailios from "../assets/images/mailios.png";
import gmail from "../assets/images/gmail.png";
import CTA from "./buttons/CTA";
import hero_bg from "../assets/images/hero_bg.png";

function Hero() {
  return (
    <React.Fragment>
      <Box mt={10}>
        <Box px={8}>
          <HeroHeading />
          <HeroMailings />
        </Box>
        <HeroImage />
      </Box>
    </React.Fragment>
  );
}

function HeroHeading() {
  return (
    <Box as="section">
      <Heading
        as="h1"
        size="xl"
        mb={4}
        fontWeight="400"
        fontSize={{ base: "3xl", lg: "2.6rem" }}
      >
        <Text as="b" textTransform="uppercase" fontWeight="extrabold">
          Enhance your
        </Text>{" "}
        business email communication with additional features for your inbox
      </Heading>
    </Box>
  );
}

function HeroMailings() {
  return (
    <Box as="section">
      <Text as="p">For your current Email client</Text>
      <Box mt={4}>
        <Stack direction="row" spacing={8} _hover={{ bg: "none" }}>
          <Link p={0} aria-label="Click to open outlook account">
            <Image src={outlook} boxSize="3rem" />
          </Link>
          <Link p={0} aria-label="Click to open gmail account">
            <Image src={gmail} />
          </Link>
          <Link p={0} aria-label="Click to open mailIOS account">
            <Image src={mailios} boxSize="3rem" />
          </Link>
        </Stack>
        <Box display="inline-block">
          <Stack
            mt={8}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <CTA caption="Try 14 days for Free" height={10} px={8} />
            <Text as="p">No credit card required</Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

function HeroImage() {
  return (
    <Box
      as="section"
      pb={10}
      mb={10}
      sx={{
        background: "#FEFEFE",
        borderRadius: "61% / 0 0 13% 45% ",
        boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <AspectRatio ratio={4 / 3}>
        <Image
          src={hero_bg}
          height="20rem"
          aria-label="Image of a man sitting while using computer"
          alt="Image of a man sitting while using computer"
        />
      </AspectRatio>
    </Box>
  );
}

export default Hero;
