import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { PickerOption } from "src/components";
import { PickerOption as PickerOptionType } from "src/models";

interface IPickerProps {
  options: PickerOptionType[];
  pickOption: (option: PickerOptionType) => void;
  selectedOption: PickerOptionType;
}

export const Picker: FC<IPickerProps> = ({
  options,
  pickOption,
  selectedOption,
}) => {
  return (
    <AnimateSharedLayout>
      <Flex
        display="inline-flex"
        bg="pomodoro.spaceCadetDark"
        borderRadius="31.5px"
        p={2}
        w="100%"
        maxW="375px"
      >
        {options.map((option: PickerOptionType) => (
          <PickerOption
            key={option.key}
            optionName={option.name}
            onClick={() => pickOption(option)}
            isSelected={option.key === selectedOption.key}
            layoutId="timer-option"
          />
        ))}
      </Flex>
    </AnimateSharedLayout>
  );
};
