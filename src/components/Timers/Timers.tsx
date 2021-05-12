import React, { FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Picker, Timer } from "src/components";
import { useTimeContext } from "src/context";

const options = ["pomodoro", "short break", "long break"];

export const Timers: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const { pomodoroTime, shortBreakTime, longBreakTime } = useTimeContext();

  return (
    <Flex flex={1} flexDirection="column" alignItems="center" p={5}>
      <Picker
        options={options}
        pickOption={setSelectedOption}
        selectedOption={selectedOption}
      />
      <Flex flex={1} justifyContent="center" alignItems="center" w="100%">
        {selectedOption === "pomodoro" && pomodoroTime && (
          <Timer key="pomodoro" duration={pomodoroTime} />
        )}
      </Flex>
    </Flex>
  );
};
