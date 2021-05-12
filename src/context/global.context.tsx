import React, { FC } from "react";
import { StylesContextProvider, TimeContextProvider } from "src/context";

export const GlobalContext: FC = ({ children }) => {
  return (
    <StylesContextProvider>
      <TimeContextProvider>{children}</TimeContextProvider>
    </StylesContextProvider>
  );
};
