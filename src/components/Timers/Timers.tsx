import React, { FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Picker, Timer } from "src/components";
import { useTimeContext, useTimerHelperContext } from "src/context";
import { TimerTypes, PickerOption } from "src/models";

export const Timers: FC = () => {
  const { t } = useTranslation();
  const options: PickerOption[] = [
    { name: t("POMODORO"), key: "pomodoro" },
    { name: t("SHORT_BREAK"), key: "short_break" },
    { name: t("LONG_BREAK"), key: "long_break" },
  ];

  const [selectedOption, setSelectedOption] = useState<PickerOption>(
    options[0]
  );
  const { pomodoroTime, shortBreakTime, longBreakTime } = useTimeContext();
  const { hideTimers } = useTimerHelperContext();

  return (
    <Flex flex={1} flexDirection="column" alignItems="center" p={5}>
      <Picker
        options={options}
        pickOption={(option: PickerOption) => setSelectedOption(option)}
        selectedOption={selectedOption}
      />
      <Flex flex={1} justifyContent="center" alignItems="center" w="100%">
        {selectedOption.key === TimerTypes.pomodoro &&
          pomodoroTime &&
          !hideTimers && (
            <Timer
              key={TimerTypes.pomodoro}
              duration={pomodoroTime * 60}
              selectedOptionName={selectedOption.name}
            />
          )}
        {selectedOption.key === TimerTypes.shortBreak &&
          shortBreakTime &&
          !hideTimers && (
            <Timer
              key={TimerTypes.shortBreak}
              duration={shortBreakTime * 60}
              selectedOptionName={selectedOption.name}
            />
          )}
        {selectedOption.key === TimerTypes.longBreak &&
          longBreakTime &&
          !hideTimers && (
            <Timer
              key={TimerTypes.longBreak}
              duration={longBreakTime * 60}
              selectedOptionName={selectedOption.name}
            />
          )}
      </Flex>
    </Flex>
  );
};
