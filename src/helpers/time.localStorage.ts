const POMODORO_TIME = "pomodoroTime";
const SHORT_BREAK_TIME = "shortBreakTime";
const LONG_BREAK_TIME = "longBreakTime";

class TimeLocalStorage {
  getPomodoroTime = () => localStorage.getItem(POMODORO_TIME);

  setPomodoroTime = (time: number) =>
    localStorage.setItem(POMODORO_TIME, JSON.stringify(time));

  removePomodoroTime = () => localStorage.removeItem(POMODORO_TIME);

  getShortBreakTime = () => localStorage.getItem(SHORT_BREAK_TIME);

  setShortBreakTime = (time: number) =>
    localStorage.setItem(SHORT_BREAK_TIME, JSON.stringify(time));

  removeShortBreakTime = () => localStorage.removeItem(SHORT_BREAK_TIME);

  getLongBreakTime = () => localStorage.getItem(LONG_BREAK_TIME);

  setLongBreakTime = (time: number) =>
    localStorage.setItem(LONG_BREAK_TIME, JSON.stringify(time));

  removeLongBreakTime = () => localStorage.removeItem(LONG_BREAK_TIME);
}

export const timeLocalStorage = new TimeLocalStorage();
