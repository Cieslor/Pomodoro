import React, { FC, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
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
  timerName: string;
}

export const TimerInner: FC<ITimerInnerProps> = ({
  duration,
  remainingTime,
  restart,
  reset,
  toggleTimer,
  isPlaying,
  timerName,
}) => {
  const { t } = useTranslation("Main");

  const formattedRemainingTime = dayjs
    .duration({
      seconds: remainingTime % 60,
      minutes: Math.floor(remainingTime / 60),
    })
    .format("mm:ss");

  useEffect(() => {
    document.title = `${formattedRemainingTime} - ${timerName}`;
  }, [formattedRemainingTime, timerName]);
  return (
    <Box
      color="pomodoro.periwinkleCrayola"
      mt="38px"
      w="100%"
      overflow="hidden"
    >
      <Text as="div" textStyle="h1" textAlign="center" mb={5} overflow="hidden">
        {formattedRemainingTime}
      </Text>
      {remainingTime !== 0 ? (
        <Box h="38px" textAlign="center" zIndex={1}>
          <Text textStyle="h3" pl="15px" cursor="pointer" onClick={toggleTimer}>
            {duration === remainingTime && !isPlaying
              ? t("START")
              : isPlaying
              ? t("PAUSE")
              : t("RESTART")}
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
              {t("RESET")}
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
          {t("RESTART")}
        </Text>
      )}
    </Box>
  );
};
