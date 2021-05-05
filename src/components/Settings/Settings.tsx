import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  ModalCloseButton,
  Divider,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  NumberInput,
  FontFamilySelectionGroup,
  PrimaryColorSelectionGroup,
} from "src/components";

interface ISettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Settings: React.FC<ISettingsProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation(["Settings", "Common"]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="25px" mx={6}>
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={[6, 10]}
          py={[6, 9]}
        >
          <Box as="h2" textStyle="h2" color="pomodoro.spaceCadetDark">
            {t("Settings:HEADING")}
          </Box>
          <ModalCloseButton
            color="pomodoro.spaceCadet"
            opacity="0.5"
            position="static"
          />
        </ModalHeader>
        <Divider color="pomodoro.royalBlueDark" />
        <ModalBody px={[6, 10]} pt={6} pb="5rem">
          <Box textAlign={["center", "left"]}>
            <Box
              as="h4"
              textStyle="h4"
              color="pomodoro.spaceCadetDark"
              mb={6}
            >{`${t("Settings:TIME")} (${t("Settings:MINUTES")})`}</Box>
          </Box>
          <Stack direction={["column", "row"]} spacing={5} mb={6}>
            <FormControl
              id="pomodoro"
              display={["flex", "block"]}
              alignItems="center"
            >
              <FormLabel
                textStyle="paragraph_small"
                fontSize="0.75rem"
                color="pomodoro.spaceCadet"
                textTransform="lowercase"
                opacity="0.4"
                flex={1}
                mb={[0, 2]}
              >
                {t("Common:POMODORO")}
              </FormLabel>
              <NumberInput min={1} max={999} flex={1} />
            </FormControl>
            <FormControl
              id="short-break"
              display={["flex", "block"]}
              alignItems="center"
            >
              <FormLabel
                textStyle="paragraph_small"
                fontSize="0.75rem"
                color="pomodoro.spaceCadet"
                textTransform="lowercase"
                opacity="0.4"
                flex={1}
                mb={[0, 2]}
              >
                {t("Common:SHORT_BREAK")}
              </FormLabel>
              <NumberInput min={1} max={999} flex={1} />
            </FormControl>
            <FormControl
              id="long-break"
              display={["flex", "block"]}
              alignItems="center"
            >
              <FormLabel
                textStyle="paragraph_small"
                fontSize="0.75rem"
                color="pomodoro.spaceCadet"
                textTransform="lowercase"
                opacity="0.4"
                flex={1}
                mb={[0, 2]}
              >
                {t("Common:LONG_BREAK")}
              </FormLabel>
              <NumberInput min={1} max={999} flex={1} />
            </FormControl>
          </Stack>
          <Divider color="pomodoro.royalBlueDark" />
          <Box
            display="flex"
            flexDirection={["column", "row"]}
            justifyContent={["flex-start", "space-between"]}
            alignItems="center"
            py={6}
          >
            <Box as="h4" textStyle="h4" color="pomodoro.spaceCadetDark">
              {t("Settings:FONT")}
            </Box>
            <FontFamilySelectionGroup
              options={[
                { name: "Aa", value: '"Kumbh Sans"' },
                { name: "Aa", value: '"Roboto Slab"' },
                { name: "Aa", value: '"Space Mono"' },
              ]}
              selectionName="fontFamily"
              defaultValue='"Kumbh Sans"'
              onChange={(value) => console.log(value)}
            />
          </Box>
          <Divider color="pomodoro.royalBlueDark" />
          <Box
            display="flex"
            flexDirection={["column", "row"]}
            justifyContent={["flex-start", "space-between"]}
            alignItems="center"
            py={6}
          >
            <Box as="h4" textStyle="h4" color="pomodoro.spaceCadetDark">
              {t("Settings:COLOR")}
            </Box>
            <PrimaryColorSelectionGroup
              options={["#F87070", "#70F3F8", "#D881F8"]}
              selectionName="primaryColor"
              defaultValue="#F87070"
              onChange={(value) => console.log(value)}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
