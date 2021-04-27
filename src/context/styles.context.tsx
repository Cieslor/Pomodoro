import React, { useState, createContext, useContext, useEffect } from "react";
import { FontFamily, PrimaryColor } from "src/models";
import { stylesLocalStorage } from "src/helpers";

interface IProps {
  children: JSX.Element;
}

interface IStylesContext {
  fontFamily: FontFamily;
  primaryColor: PrimaryColor;
}

interface IStylesActionsContext {
  setFontFamily: React.Dispatch<React.SetStateAction<FontFamily>>;
  setPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
}

const defaultStylesContextValues: {
  fontFamily: FontFamily;
  primaryColor: PrimaryColor;
} = {
  fontFamily: "'Kumbh Sans', sans-serif",
  primaryColor: "#F87070",
};

const StylesContext = createContext<IStylesContext>({} as IStylesContext);
const StylesActionsContext = createContext({} as IStylesActionsContext);

export const useStylesContext: () => IStylesContext = () =>
  useContext(StylesContext);
export const useStylesActionsContext: () => IStylesActionsContext = () =>
  useContext(StylesActionsContext);

export const StylesContextProvider: React.FC<IProps> = ({ children }) => {
  const [fontFamily, setFontFamily] = useState<FontFamily>(
    defaultStylesContextValues.fontFamily
  );
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor>(
    defaultStylesContextValues.primaryColor
  );

  useEffect(() => {
    const selectedFontFamily = stylesLocalStorage.getFontFamily();
    const selectedPrimaryColor = stylesLocalStorage.getPrimaryColor();

    if (selectedFontFamily) {
      setFontFamily(selectedFontFamily as FontFamily);
    } else {
      stylesLocalStorage.setFontFamily(defaultStylesContextValues.fontFamily);
    }

    if (selectedPrimaryColor) {
      setPrimaryColor(selectedPrimaryColor as PrimaryColor);
    } else {
      stylesLocalStorage.setPrimaryColor(
        defaultStylesContextValues.primaryColor
      );
    }
  }, []);

  useEffect(() => {
    stylesLocalStorage.setFontFamily(fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    stylesLocalStorage.setPrimaryColor(primaryColor);
  }, [primaryColor]);

  return (
    <StylesContext.Provider value={{ fontFamily, primaryColor }}>
      <StylesActionsContext.Provider value={{ setFontFamily, setPrimaryColor }}>
        {children}
      </StylesActionsContext.Provider>
    </StylesContext.Provider>
  );
};
