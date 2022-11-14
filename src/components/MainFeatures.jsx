import React from "react";
import { Container, Box, Flex, Stack, Image } from "@chakra-ui/react";
import Feature from "./Feature";
import Ellipse14 from "../assets/images/Ellipse 14.png";
import Ellipse6 from "../assets/images/Ellipse 6.png";
import Ellipse7 from "../assets/images/Ellipse 7.png";
import Ellipse8 from "../assets/images/Ellipse 8.png";
import emailIcon from "../assets/images/email 1.png";
import paperPlaneIcon from "../assets/images/paper-plane.png";
import pencilIcon from "../assets/images/pencil.png";
import signatureIcon from "../assets/images/signature.png";
import { featureDetails } from "../data/featureDetails";

function MainFeatures() {
  return (
    <Container as="section" px={8} pt={8} position="relative" width="200px">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        {featureDetails.map((feature, i) => (
          <Feature
            key={i}
            background={feature.background}
            icon={feature.icon}
            heading={feature.heading}
            text={feature.text}
          />
        ))}
       

        {/* <Feature
          background={Ellipse6}
          icon={paperPlaneIcon}
          heading="Send Later"
          text="For when you don't want to send an email immediately. Prepare everything, then choose a time and date to send"
        />
        <Feature
          background={Ellipse7}
          icon={signatureIcon}
          heading="Signature"
          text="Customizable templates to build trust, identity and branding"
        />
        <Feature
          background={Ellipse8}
          icon={pencilIcon}
          heading="Notes & Tasks"
          text="Add Notes and Tasks to your emails and share them with your team"
        /> */}
      </Flex>
    </Container>
  );
}

export default MainFeatures;
