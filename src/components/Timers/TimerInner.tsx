import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface ITimerInnerProps {
  duration: number;
  remainingTime: number;
  restart: () => void;
  reset: () => void;
  toggleTimer: () => void;
  isPlaying: boolean;
}

export const TimerInner: FC<ITimerInnerProps> = ({
  duration,
  remainingTime,
  restart,
  reset,
  toggleTimer,
  isPlaying,
}) => {
  return (
    <Box
      color="pomodoro.periwinkleCrayola"
      mt="38px"
      w="100%"
      overflow="hidden"
    >
      <Text as="div" textStyle="h1" textAlign="center" mb={5} overflow="hidden">
        {dayjs
          .duration({
            seconds: remainingTime % 60,
            minutes: Math.floor(remainingTime / 60),
          })
          .format("mm:ss")}
      </Text>
      {remainingTime !== 0 ? (
        <Box h="38px" textAlign="center" zIndex={1}>
          <Text textStyle="h3" pl="15px" cursor="pointer" onClick={toggleTimer}>
            {duration === remainingTime && !isPlaying
              ? "Start"
              : isPlaying
              ? "Pause"
              : "Resume"}
          </Text>
          {duration !== remainingTime && (
            <Text
              textStyle="h4"
              mt="0.5rem"
              pl="5px"
              cursor="pointer"
              textAlign="center"
              fontSize="0.6rem"
              onClick={reset}
            >
              Reset
            </Text>
          )}
        </Box>
      ) : (
        <Text
          textStyle="h3"
          pl="15px"
          cursor="pointer"
          textAlign="center"
          onClick={restart}
        >
          Restart
        </Text>
      )}
    </Box>
  );
};
