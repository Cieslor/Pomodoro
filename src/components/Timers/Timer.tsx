import React, { FC, useRef, useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTheme, Box, Text } from "@chakra-ui/react";

interface ITimerProps {
  duration: number;
}

export const Timer: FC<ITimerProps> = ({ duration }) => {
  const {
    colors: {
      pomodoro: { primary, spaceCadetDark },
    },
  } = useTheme();

  const containersRef = useRef<HTMLDivElement>(null);
  const [containersWidth, setContainersWidth] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const toggleTimer = () => {
    setIsPlaying(!isPlaying);
  };

  const restart = () => {
    setTimerKey(timerKey + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setContainersWidth(
        containersRef.current ? containersRef.current.offsetWidth - 27 : 0
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containersRef.current]);

  useEffect(() => {
    if (containersRef.current) {
      setContainersWidth(containersRef.current.offsetWidth - 27);
    }
  }, []);

  return (
    <Box
      position="relative"
      w="100%"
      maxW="410px"
      bg="gradients.timerGradient"
      borderRadius="50%"
      sx={{
        "&::before": {
          content: "''",
          display: "block",
          paddingBottom: "100%",
        },
      }}
    >
      <Box
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="90%"
        h="90%"
        top="5%"
        left="5%"
        borderRadius="50%"
        bg="pomodoro.spaceCadetDark"
        ref={containersRef}
      >
        <CountdownCircleTimer
          key={timerKey}
          size={containersWidth ?? 0}
          strokeWidth={13.5}
          isPlaying={isPlaying}
          duration={duration}
          colors={primary}
          trailColor={spaceCadetDark}
        >
          {({ remainingTime }) => (
            <TimerInner
              duration={duration}
              isPlaying={isPlaying}
              remainingTime={remainingTime ?? 0}
              toggleTimer={toggleTimer}
              restart={restart}
            />
          )}
        </CountdownCircleTimer>
      </Box>
    </Box>
  );
};

interface ITimerInnerProps {
  duration: number;
  remainingTime: number;
  restart: () => void;
  toggleTimer: () => void;
  isPlaying: boolean;
}

const TimerInner: FC<ITimerInnerProps> = ({
  duration,
  remainingTime,
  restart,
  toggleTimer,
  isPlaying,
}) => {
  const test = restart;
  return (
    <Box>
      <Text
        textStyle="h1"
        color="pomodoro.periwinkleCrayola"
        textAlign="center"
      >
        {remainingTime}
      </Text>
      {remainingTime !== 0 && (
        <Text
          textStyle="h3"
          color="pomodoro.periwinkleCrayola"
          pl="15px"
          cursor="pointer"
          onClick={toggleTimer}
        >
          {duration === remainingTime && !isPlaying
            ? "Start"
            : isPlaying
            ? "Pause"
            : "Continue"}
        </Text>
      )}
    </Box>
  );
};
