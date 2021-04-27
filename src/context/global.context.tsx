import React from "react";
import { StylesContextProvider } from "src/context";

interface IProps {
  children: JSX.Element;
}

export const GlobalContext: React.FC<IProps> = ({ children }) => {
  return <StylesContextProvider>{children}</StylesContextProvider>;
};
