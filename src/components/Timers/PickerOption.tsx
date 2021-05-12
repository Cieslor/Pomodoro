import React, { FC } from "react";
import { Flex, Text, useTheme } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IPickerOptionProps {
  layoutId: string;
  isSelected: boolean;
  onClick: (option: string) => void;
  optionName: string;
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export const PickerOption: FC<IPickerOptionProps> = ({
  layoutId,
  isSelected,
  onClick,
  optionName,
}) => {
  const {
    colors: {
      pomodoro: { primary, spaceCadetDark },
    },
  } = useTheme();
  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      flex={1}
      h="50px"
      borderRadius="26.5px"
      cursor="pointer"
      onClick={() => onClick(optionName)}
    >
      <Text
        textStyle="paragraph_small"
        color={
          isSelected ? "pomodoro.spaceCadetDark" : "pomodoro.periwinkleCrayola"
        }
        opacity={isSelected ? 1 : 0.4}
        zIndex={1}
      >
        {optionName}
      </Text>
      {isSelected && (
        <motion.div
          layoutId={layoutId}
          initial={false}
          animate={{ backgroundColor: primary }}
          transition={spring}
          style={{
            backgroundColor: spaceCadetDark,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "26.5px",
          }}
        />
      )}
    </Flex>
  );
};
