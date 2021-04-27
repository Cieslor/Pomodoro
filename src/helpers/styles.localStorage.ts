import { FontFamily, PrimaryColor } from "src/models";

const PRIMARY_COLOR = "primaryColor";
const FONT_FAMILY = "fontFamily";

class StylesLocalStorage {
  getPrimaryColor = () => localStorage.getItem(PRIMARY_COLOR);

  setPrimaryColor = (color: PrimaryColor) =>
    localStorage.setItem(PRIMARY_COLOR, color);

  removePrimaryColor = () => localStorage.removeItem(PRIMARY_COLOR);

  getFontFamily = () => localStorage.getItem(FONT_FAMILY);

  setFontFamily = (font: FontFamily) => localStorage.setItem(FONT_FAMILY, font);

  removeFontFamily = () => localStorage.removeItem(FONT_FAMILY);
}

export const stylesLocalStorage = new StylesLocalStorage();
