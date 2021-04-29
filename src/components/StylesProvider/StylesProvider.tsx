import "@fontsource/roboto-slab/700.css";
import "@fontsource/space-mono/700.css";
import "@fontsource/kumbh-sans/700.css";

import React, { useMemo } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useStylesContext } from "src/context";
import { Button } from "src/components";

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
            bg: "pomodoro.spaceCadet",
            color: "pomodoro.periwinkleCrayola",
            fontWeight: 700,
          },
        },
      },
      fonts: {
        heading: `${fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        body: `${fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      },
      colors: {
        pomodoro: {
          primary: primaryColor,
          periwinkleCrayola: "#D7E0FF",
          spaceCadet: "#1E213F",
          ghostWhite: "#EFF1FA",
          spaceCadetDark: "#161932",
        },
      },
      textStyles: {
        h1: {
          fontSize: ["80px", "100px"],
          fontWeight: 700,
          lineHeight: "120%",
          letterSpacing: "-5px",
        },
        h2: {
          fontSize: ["20px", "28px"],
          fontWeight: 700,
          lineHeight: "120%",
          letterSpacing: "0px",
        },
        h3: {
          fontSize: ["11px", "16px"],
          fontWeight: 700,
          lineHeight: "120%",
          letterSpacing: "15px",
          textTransform: "uppercase",
        },
        h4: {
          fontSize: "13px",
          fontWeight: 700,
          lineHeight: "120%",
          letterSpacing: "5px",
          textTransform: "uppercase",
        },
        paragraph: {
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "18px",
          letterSpacing: "0px",
        },
        paragraph_small: {
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "14px",
          letterSpacing: "0px",
        },
      },
      components: {
        Button,
      },
    });
  }, [primaryColor, fontFamily]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};
