import React, { useState, createContext, useContext, FC } from "react";

interface ITimerHelperContext {
  hideTimers: boolean;
}

interface ITimerHelperActionsContext {
  setHideTimers: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerHelperContext = createContext<ITimerHelperContext>(
  {} as ITimerHelperContext
);
const TimerHelperActionsContext = createContext(
  {} as ITimerHelperActionsContext
);

export const useTimerHelperContext: () => ITimerHelperContext = () =>
  useContext(TimerHelperContext);
export const useTimerHelperActionsContext: () => ITimerHelperActionsContext =
  () => useContext(TimerHelperActionsContext);

export const TimerHelperContextProvider: FC = ({ children }) => {
  const [hideTimers, setHideTimers] = useState<boolean>(false);

  return (
    <TimerHelperContext.Provider value={{ hideTimers }}>
      <TimerHelperActionsContext.Provider value={{ setHideTimers }}>
        {children}
      </TimerHelperActionsContext.Provider>
    </TimerHelperContext.Provider>
  );
};
