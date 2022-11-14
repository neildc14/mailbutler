import React from "react";
import Ellipse14 from "../assets/images/Ellipse 14.png";
import {
  Box,
  Image,
  Heading,
  Text,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import emailIcon from "../assets/images/email 1.png";

function Feature() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: "26rem",
          width: "100%",
          backgroundImage: `url('${Ellipse14}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
        w={100}
      >
        <Box
          m="auto"
          maxWidth="16rem"
          position="absolute"
          lineHeight="tall"
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image src={emailIcon} mx="auto" mb={10} />
          <Heading as="h3" mb={4} fontSize="2xl" textAlign="center">
            Email Tracking
          </Heading>
          <Text fontSize="lg">
            Track opened Emails or links inside of them and get notified when
            your emails are opened
          </Text>
          <Button
            variant="ghost"
            mt={4}
            p={0}
            gap={2}
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
            rightIcon={<ArrowRightIcon />}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Feature;
