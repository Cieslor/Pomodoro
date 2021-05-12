import React, { FC, useRef, useEffect, useState, useLayoutEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTheme, Box } from "@chakra-ui/react";
import { TimerInner } from "src/components";
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

  const reset = () => {
    setTimerKey(timerKey + 1);
    setIsPlaying(false);
  };

  const restart = () => {
    setTimerKey(timerKey + 1);
  };

  useLayoutEffect(() => {
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
      boxShadow="-50px -50px 100px #272C5A, 50px 50px 100px #121530"
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
        {containersWidth && (
          <CountdownCircleTimer
            key={timerKey}
            size={containersWidth}
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
                reset={reset}
              />
            )}
          </CountdownCircleTimer>
        )}
      </Box>
    </Box>
  );
};
