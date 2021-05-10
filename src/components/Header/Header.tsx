import React, { FC } from "react";
import { Flex, Image } from "@chakra-ui/react";
import logo from "src/assets/logo.svg";

export const Header: FC = () => (
  <Flex pb={12} pt={[8, 12]} px={5} justifyContent="center">
    <Image src={logo} alt="Pomodoro" />
  </Flex>
);
