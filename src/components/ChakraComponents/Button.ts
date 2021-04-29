export const Button = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "26.5px",
  },
  sizes: {
    md: {
      fontSize: "md",
      px: "1.5rem",
      py: "1.25rem",
      h: "auto",
    },
    sm: {
      fontSize: "sm",
      px: "1.5rem",
      py: "1rem",
      h: "auto",
    },
  },
  variants: {
    "primary-light": {
      bg: "pomodoro.primary",
      color: "white",
      _hover: {
        filter: "brightness(120%)",
      },
    },
    "primary-dark": {
      bg: "pomodoro.primary",
      color: "pomodoro.spaceCadet",
      _hover: {
        filter: "brightness(120%)",
      },
    },
  },
};
