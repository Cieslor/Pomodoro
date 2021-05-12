import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  FC,
} from "react";
import { timeLocalStorage } from "src/helpers";

interface ITimeContext {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
}

interface ITimeActionsContext {
  setPomodoroTime: React.Dispatch<React.SetStateAction<number>>;
  setShortBreakTime: React.Dispatch<React.SetStateAction<number>>;
  setLongBreakTime: React.Dispatch<React.SetStateAction<number>>;
}

const defaultTimeContextValues: ITimeContext = {
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
};

const TimeContext = createContext<ITimeContext>({} as ITimeContext);
const TimeActionsContext = createContext({} as ITimeActionsContext);

export const useTimeContext: () => ITimeContext = () => useContext(TimeContext);
export const useTimeActionsContext: () => ITimeActionsContext = () =>
  useContext(TimeActionsContext);

export const TimeContextProvider: FC = ({ children }) => {
  const [pomodoroTime, setPomodoroTime] = useState<number>(0);
  const [shortBreakTime, setShortBreakTime] = useState<number>(0);
  const [longBreakTime, setLongBreakTime] = useState<number>(0);

  useEffect(() => {
    const pomodoroTimeFromStorage = timeLocalStorage.getPomodoroTime();
    const shortBreakTimeFromStorage = timeLocalStorage.getShortBreakTime();
    const longBreakTimeFromStorage = timeLocalStorage.getLongBreakTime();

    if (pomodoroTimeFromStorage) {
      setPomodoroTime(+pomodoroTimeFromStorage);
    } else {
      timeLocalStorage.setPomodoroTime(defaultTimeContextValues.pomodoroTime);
    }

    if (shortBreakTimeFromStorage) {
      setShortBreakTime(+shortBreakTimeFromStorage);
    } else {
      timeLocalStorage.setShortBreakTime(
        defaultTimeContextValues.shortBreakTime
      );
    }

    if (longBreakTimeFromStorage) {
      setLongBreakTime(+longBreakTimeFromStorage);
    } else {
      timeLocalStorage.setLongBreakTime(defaultTimeContextValues.longBreakTime);
    }
  }, []);

  useEffect(() => {
    timeLocalStorage.setPomodoroTime(pomodoroTime);
  }, [pomodoroTime]);

  useEffect(() => {
    timeLocalStorage.setShortBreakTime(shortBreakTime);
  }, [shortBreakTime]);

  useEffect(() => {
    timeLocalStorage.setLongBreakTime(longBreakTime);
  }, [longBreakTime]);

  return (
    <TimeContext.Provider
      value={{ pomodoroTime, shortBreakTime, longBreakTime }}
    >
      <TimeActionsContext.Provider
        value={{ setPomodoroTime, setShortBreakTime, setLongBreakTime }}
      >
        {children}
      </TimeActionsContext.Provider>
    </TimeContext.Provider>
  );
};
