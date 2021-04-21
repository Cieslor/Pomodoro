import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "utils.background",
        color: "typo.blue",
        fontWeight: 700,
      },
    },
  },
  colors: {
    pomodoro: {},
  },
});
