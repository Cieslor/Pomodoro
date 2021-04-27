import React, { useMemo } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useStylesContext } from "src/context";

interface IProps {
  children: JSX.Element;
}

export const StylesProvider: React.FC<IProps> = ({ children }) => {
  const { primaryColor, fontFamily } = useStylesContext();

  const theme = useMemo(() => {
    return extendTheme({
      styles: {
        global: {
          body: {
            fontFamily,
            bg: "utils.background",
            color: "typo.blue",
            fontWeight: 700,
          },
        },
      },
      colors: {
        pomodoro: {
          primary: primaryColor,
        },
      },
    });
  }, [primaryColor, fontFamily]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};
