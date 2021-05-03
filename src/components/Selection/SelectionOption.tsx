import React from "react";
import { Box, useRadio } from "@chakra-ui/react";

export const SelectionOption: React.FC = ({ children, ...restProps }) => {
  const { getInputProps, getCheckboxProps, state } = useRadio(restProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        color="pomodoro.spaceCadet"
        fontWeight="700"
        bg="pomodoro.ghostWhite"
        borderRadius="50%"
        _checked={{
          bg: "pomodoro.spaceCadetDark",
          color: "white",
        }}
        sx={{
          transition: "background-color 0.1s ease-in",
          "&::before": {
            content: "''",
            position: "absolute",
            display: state.isChecked ? "none" : "block",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120%",
            height: "120%",
            bg: "white",
            border: "1px solid pomodoro.ghostWhite",
            borderRadius: "50%",
            zIndex: "-1",
            opacity: 0,
            transition: "opacity 0.15s linear",
          },
        }}
        _hover={{
          "&::before": {
            opacity: 1,
          },
        }}
        minW="40px"
        minH="40px"
      >
        {children}
      </Box>
    </Box>
  );
};
