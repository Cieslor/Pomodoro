import React, { FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { PickerOption } from "src/components";

const options = ["pomodoro", "short break", "long break"];

export const Picker: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  return (
    <AnimateSharedLayout>
      <Flex
        display="inline-flex"
        bg="pomodoro.spaceCadetDark"
        borderRadius="31.5px"
        p={2}
      >
        {options.map((option: string) => (
          <PickerOption
            key={option}
            optionName={option}
            onClick={(option) => setSelectedOption(option)}
            isSelected={option === selectedOption}
            layoutId="timer-option"
          />
        ))}
      </Flex>
    </AnimateSharedLayout>
  );
};
