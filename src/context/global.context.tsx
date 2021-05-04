import React from "react";
import { StylesContextProvider, TimeContextProvider } from "src/context";

interface IProps {
  children: JSX.Element;
}

export const GlobalContext: React.FC<IProps> = ({ children }) => {
  return (
    <StylesContextProvider>
      <TimeContextProvider>{children}</TimeContextProvider>
    </StylesContextProvider>
  );
};
