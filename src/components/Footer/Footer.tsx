import React, { FC } from "react";
import { Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Settings } from "src/components";

export const Footer: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex py={12} px={5} justifyContent="center">
      <Icon
        as={SettingsIcon}
        cursor="pointer"
        onClick={() => onOpen()}
        w={8}
        h={8}
        opacity="0.6"
        _hover={{
          transition: "opacity .2s ease-out",
          opacity: 1,
        }}
      />
      <Settings isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
