import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Divider,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";
import evernote from "../assets/icons/evernote.png";
import todoist from "../assets/icons/todoist.png";
import asana from "../assets/icons/asana.png";
import meistertask from "../assets/icons/meistertask.png";
import microsofttodo from "../assets/icons/microsoft-to-do-logo 1.png";
import googletask from "../assets/icons/google_task.png";
import onenote from "../assets/icons/one_note.png";
import slack from "../assets/icons/slack.png";
import trello from "../assets/icons/trello.png";
import CTA from "./buttons/CTA";

function IntegratedApps() {
  return (
    <Container as="section" px={8} pt={8}>
      <Divider orientation="horizontal" my={4} bgColor="gray.800" />
      <SimpleGrid minChildWidth="120px" spacing="10px">
        <Image src={evernote} w={120} />
        <Image src={todoist} w={120} />
        <Image src={asana} w={120} />
        <Image src={meistertask} w={120} />
        <Image src={microsofttodo} w={120} />
        <Image src={googletask} w={120} />
        <Image src={onenote} w={120} />
        <Image src={slack} w={120} />
        <Image src={trello} w={120} />
      </SimpleGrid>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={8}
      >
        <Heading as="h3" fontSize="xl" textAlign="center">
          Whatever app you use to stay productive and organized, you can easily
          add Mailbutler to your workflows
        </Heading>
        <Box mt={4}>
          <CTA
            caption="Learn More"
            size="md"
            bgColor="white"
            hoverBgColor="#51A387"
            textColor="#51A387"
            hoverTextColor="white"
            btnBorderColor="#51A387"
            variant="outline"
          />
        </Box>
      </Flex>
      <Divider orientation="horizontal" my={4} bgColor="gray.800" />
    </Container>
  );
}

export default IntegratedApps;
