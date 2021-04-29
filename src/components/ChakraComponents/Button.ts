export const Button = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "26.5px",
  },
  sizes: {
    md: {
      fontSize: "16px",
      px: "25px",
      py: "20px",
      h: "auto",
    },
    sm: {
      fontSize: "14px",
      px: "25px",
      py: "16px",
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
