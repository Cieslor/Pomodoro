import React, { FC } from "react";
import { useRadioGroup, HStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { PrimaryColorSelectionOption } from "src/components";

interface IPrimaryColorSelectionGroupProps {
  options: (string | number)[];
  selectionName: string;
  onChange: (value: string) => void;
  defaultValue: string | number;
}

export const PrimaryColorSelectionGroup: FC<IPrimaryColorSelectionGroupProps> =
  ({ options, selectionName, onChange, defaultValue }) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: selectionName,
      defaultValue,
      onChange,
    });

    const selectionGroup = getRootProps();

    return (
      <HStack {...selectionGroup} spacing={4}>
        {options.map((option) => {
          const radio = getRadioProps({ value: option });
          return (
            <PrimaryColorSelectionOption
              key={option}
              {...radio}
              backgroundColor={option.toString()}
            >
              <CheckIcon w={3} h={3} />
            </PrimaryColorSelectionOption>
          );
        })}
      </HStack>
    );
  };
