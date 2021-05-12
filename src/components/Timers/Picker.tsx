import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { PickerOption } from "src/components";

interface IPickerProps {
  options: string[];
  pickOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
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
        {options.map((option: string) => (
          <PickerOption
            key={option}
            optionName={option}
            onClick={(option) => pickOption(option)}
            isSelected={option === selectedOption}
            layoutId="timer-option"
          />
        ))}
      </Flex>
    </AnimateSharedLayout>
  );
};
