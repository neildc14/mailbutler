import React, { useState } from "react";
import useChangeInput from "../hooks/useChangeInput";
import CTA from "../components/buttons/CTA";
import {
  Box,
  Flex,
  HStack,
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
  const [value, setValue] = useState("gmail");
  const [show, setShow] = useState(false);

  const showPassword = () => setShow(!show);

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
        <RadioGroup name="email_app" value={value} onChange={setValue}>
          <HStack direction="row" spacing={4}>
            <Radio bg="white" value="apple mail">
              Apple Mail
            </Radio>
            <Radio bg="white" value="outlook">
              Outlook
            </Radio>
            <Radio bg="white" value="gmail">
              Gmail
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl pb={6}>
        <FormLabel fontWeight="bold">Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            aria-label="input your password"
            borderRadius="full"
            bg="white"
            {...bindPassword}
          />
          <InputRightElement width="4.5rem">
            <IconButton
              size="lg"
              variant="ghost"
              _hover={{ padding: 0 }}
              _active={{ padding: 0 }}
              icon={show ? <ViewOffIcon /> : <ViewIcon />}
              onClick={showPassword}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl pb={6}>
        <HStack spacing={2}>
          <Checkbox type="checkbox" />
          <Link textDecoration="underline">Accept Term and Privacy Policy</Link>
        </HStack>
      </FormControl>
      <Flex justifyContent="center">
        <CTA
          caption="Sign Up for Free Trial"
          bgColor="#51A387"
          as="button"
          type="submit"
          size="md"
        />
      </Flex>
    </Box>
  );
}

export default Form;
