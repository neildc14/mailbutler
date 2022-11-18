import React, { useState } from "react";
import useChangeInput from "../hooks/useChangeInput";
import CTA from "../components/buttons/CTA";
import {
  Box,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  InputGroup,
  InputRightElement,
  Input,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Form() {
  const [workEmail, bindWorkEmail] = useChangeInput("");
  const [password, bindPassword] = useChangeInput("");
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Box as="form" pt={6}>
      <FormControl pb={6}>
        <FormLabel fontWeight="bold">Work Email</FormLabel>
        <Input
          type="text"
          aria-label="input your work email"
          borderRadius="full"
          bg="white"
          {...bindWorkEmail}
        />
      </FormControl>
      <FormControl pb={6}>
        <FormLabel fontWeight="bold">Email application</FormLabel>
        <RadioGroup>
          <Stack direction="row" spacing={4}>
            <Radio bg="white">Apple Mail</Radio>
            <Radio bg="white">Outlook</Radio>
            <Radio bg="white">Gmail</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl pb={6}>
        <FormLabel fontWeight="bold">Password</FormLabel>
        <InputGroup>
          <Input
            aria-label="input your password"
            borderRadius="full"
            type={show ? "text" : "password"}
            bg="white"
            {...bindPassword}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              size="lg"
              variant="ghost"
              icon={show ? <ViewOffIcon /> : <ViewIcon />}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl pb={6}>
        <Stack direction="row" spacing={2}>
          <Checkbox type="checkbox" defaultChecked />
          <Link textDecoration="underline">Accept Term and Privacy Policy</Link>
        </Stack>
      </FormControl>
      <Flex justifyContent="center">
        <CTA
          caption="Sign Up for Free Trial"
          bgColor="#51A387"
          as="button"
          size="md"
        />
      </Flex>
    </Box>
  );
}

export default Form;
