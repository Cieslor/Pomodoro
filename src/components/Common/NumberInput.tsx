import React, { FC } from "react";
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

export const NumberInput: FC<NumberInputProps> = ({ ...numberInputProps }) => {
  return (
    <ChakraNumberInput {...numberInputProps} variant="filled">
      <NumberInputField
        bg="pomodoro.ghostWhite"
        _focus={{
          bg: "pomodoro.ghostWhite",
          "& + div > div[role=button]": {
            color: "pomodoro.spaceCadet",
          },
        }}
        _hover={{
          "& + div > div[role=button]": {
            color: "pomodoro.spaceCadet",
          },
        }}
        color="pomodoro.spaceCadet"
        fontSize="sm"
        py={6}
      />
      <NumberInputStepper w="3rem">
        <NumberIncrementStepper
          border="none"
          color="numberInput.arrow"
          children={<ChevronUpIcon w={7} h={6} />}
        />
        <NumberDecrementStepper
          border="none"
          color="numberInput.arrow"
          children={<ChevronDownIcon w={7} h={6} />}
        />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};
