import React, { FC } from "react";
import { Box, useRadio } from "@chakra-ui/react";

interface IPrimaryColorSelectionProps {
  backgroundColor: string;
}

export const PrimaryColorSelectionOption: FC<IPrimaryColorSelectionProps> = ({
  children,
  backgroundColor,
  ...restProps
}) => {
  const { getInputProps, getCheckboxProps, state } = useRadio(restProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        display="flex"
        position="relative"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        color="pomodoro.spaceCadetDark"
        fontWeight="700"
        bg={backgroundColor}
        borderRadius="50%"
        sx={{
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
            border: "1px solid",
            borderColor: "pomodoro.ghostWhite",
            borderRadius: "50%",
            zIndex: -1,
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
        {state.isChecked && children}
      </Box>
    </Box>
  );
};
