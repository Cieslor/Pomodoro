import React, { FC } from "react";
import {
  StylesContextProvider,
  TimeContextProvider,
  TimerHelperContextProvider,
} from "src/context";

export const GlobalContext: FC = ({ children }) => {
  return (
    <StylesContextProvider>
      <TimeContextProvider>
        <TimerHelperContextProvider>{children}</TimerHelperContextProvider>
      </TimeContextProvider>
    </StylesContextProvider>
  );
};
