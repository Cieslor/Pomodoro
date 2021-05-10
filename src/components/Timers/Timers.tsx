import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { Picker } from "src/components";

export const Timers: FC = () => {
  return (
    <Flex flex={1} flexDirection="column" alignItems="center">
      <Picker />
    </Flex>
  );
};
