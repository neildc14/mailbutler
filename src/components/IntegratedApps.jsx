import React from "react";
import { Container, SimpleGrid, Image } from "@chakra-ui/react";
import evernote from "../assets/icons/evernote.png";
import todoist from "../assets/icons/todoist.png";
import asana from "../assets/icons/asana.png";
import meistertask from "../assets/icons/meistertask.png";
import microsofttodo from "../assets/icons/microsoft-to-do-logo 1.png";
import googletask from "../assets/icons/google_task.png";
import onenote from "../assets/icons/one_note.png";
import slack from "../assets/icons/slack.png";
import trello from "../assets/icons/trello.png";

function IntegratedApps() {
  return (
    <Container as="section" px={8} pt={8}>
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
    </Container>
  );
}

export default IntegratedApps;
