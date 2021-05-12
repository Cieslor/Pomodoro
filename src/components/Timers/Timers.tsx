import React, { FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Picker, Timer } from "src/components";
import { useTimeContext, useTimerHelperContext } from "src/context";
import { TimerTypes } from "src/models";

const options = ["pomodoro", "short break", "long break"];

export const Timers: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const { pomodoroTime, shortBreakTime, longBreakTime } = useTimeContext();
  const { hideTimers } = useTimerHelperContext();

  return (
    <Flex flex={1} flexDirection="column" alignItems="center" p={5}>
      <Picker
        options={options}
        pickOption={setSelectedOption}
        selectedOption={selectedOption}
      />
      <Flex flex={1} justifyContent="center" alignItems="center" w="100%">
        {selectedOption === TimerTypes.pomodoro &&
          pomodoroTime &&
          !hideTimers && (
            <Timer key={TimerTypes.pomodoro} duration={pomodoroTime * 60} />
          )}
        {selectedOption === TimerTypes.shortBreak &&
          shortBreakTime &&
          !hideTimers && (
            <Timer key={TimerTypes.shortBreak} duration={shortBreakTime * 60} />
          )}
        {selectedOption === TimerTypes.longBreak &&
          longBreakTime &&
          !hideTimers && (
            <Timer key={TimerTypes.longBreak} duration={longBreakTime * 60} />
          )}
      </Flex>
    </Flex>
  );
};
