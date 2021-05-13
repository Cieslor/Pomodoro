import React, { FC } from "react";
import { useRadioGroup, HStack, Text, TypographyProps } from "@chakra-ui/react";
import { FontFamilySelectionOption } from "src/components";

interface IFontFamilySelectionGroupProps {
  options: { name: string; value: string | number }[];
  selectionName: string;
  onChange: (value: string) => void;
  defaultValue: string | number;
}

export const FontFamilySelectionGroup: FC<IFontFamilySelectionGroupProps> = ({
  options,
  selectionName,
  onChange,
  defaultValue,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: selectionName,
    defaultValue,
    onChange,
  });

  const selectionGroup = getRootProps();

  return (
    <HStack {...selectionGroup} spacing={4}>
      {options.map((option) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <FontFamilySelectionOption key={option.value} {...radio}>
            <Text
              p={0}
              fontFamily={option.value as TypographyProps["fontFamily"]}
            >
              {option.name}
            </Text>
          </FontFamilySelectionOption>
        );
      })}
    </HStack>
  );
};
