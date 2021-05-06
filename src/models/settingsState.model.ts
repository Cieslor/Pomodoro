import { PrimaryColor, FontFamily } from "src/models";

export interface ISettingsState {
  temporaryPrimaryColor: PrimaryColor;
  temporaryFontFamily: FontFamily;
  temporaryPomodoroTime: number;
  temporaryShortBreakTime: number;
  temporaryLongBreakTime: number;
}
