import React, { useState, useEffect, FC } from "react";
import {
  Button,
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
import {
  useStylesContext,
  useTimeContext,
  useStylesActionsContext,
  useTimeActionsContext,
  useTimerHelperActionsContext,
} from "src/context";
import { FontFamily, ISettingsState, PrimaryColor } from "src/models";

interface ISettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Settings: FC<ISettingsProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const { primaryColor, fontFamily } = useStylesContext();
  const { pomodoroTime, shortBreakTime, longBreakTime } = useTimeContext();

  const { setPrimaryColor, setFontFamily } = useStylesActionsContext();
  const { setPomodoroTime, setShortBreakTime, setLongBreakTime } =
    useTimeActionsContext();

  const { setHideTimers } = useTimerHelperActionsContext();

  const [temporarySettingsState, setTemporarySettingsState] =
    useState<ISettingsState>({} as ISettingsState);

  const saveSettings = () => {
    const {
      temporaryPrimaryColor,
      temporaryFontFamily,
      temporaryPomodoroTime,
      temporaryShortBreakTime,
      temporaryLongBreakTime,
    } = temporarySettingsState;

    setPrimaryColor(temporaryPrimaryColor);
    setFontFamily(temporaryFontFamily);
    setPomodoroTime(temporaryPomodoroTime);
    setShortBreakTime(temporaryShortBreakTime);
    setLongBreakTime(temporaryLongBreakTime);

    setHideTimers(false);

    onClose();
  };

  useEffect(() => {
    setTemporarySettingsState({
      temporaryPrimaryColor: primaryColor,
      temporaryFontFamily: fontFamily,
      temporaryPomodoroTime: pomodoroTime,
      temporaryShortBreakTime: shortBreakTime,
      temporaryLongBreakTime: longBreakTime,
    });
  }, [
    isOpen,
    primaryColor,
    fontFamily,
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
  ]);

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
        <ModalBody px={[6, 10]} pt={6} pb={8} position="relative">
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
                {t("POMODORO")}
              </FormLabel>
              <NumberInput
                min={1}
                max={60}
                flex={1}
                defaultValue={pomodoroTime}
                onChange={(value) => {
                  setTemporarySettingsState((prevState) => ({
                    ...prevState,
                    temporaryPomodoroTime: +value,
                  }));
                  setHideTimers(true);
                }}
              />
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
                {t("SHORT_BREAK")}
              </FormLabel>
              <NumberInput
                min={1}
                max={60}
                flex={1}
                defaultValue={shortBreakTime}
                onChange={(value) => {
                  setTemporarySettingsState((prevState) => ({
                    ...prevState,
                    temporaryShortBreakTime: +value,
                  }));
                  setHideTimers(true);
                }}
              />
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
                {t("LONG_BREAK")}
              </FormLabel>
              <NumberInput
                min={1}
                max={60}
                flex={1}
                defaultValue={longBreakTime}
                onChange={(value) => {
                  setTemporarySettingsState((prevState) => ({
                    ...prevState,
                    temporaryLongBreakTime: +value,
                  }));
                  setHideTimers(true);
                }}
              />
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
            <Box
              as="h4"
              textStyle="h4"
              color="pomodoro.spaceCadetDark"
              mb={[5, 0]}
            >
              {t("Settings:FONT")}
            </Box>
            <FontFamilySelectionGroup
              options={[
                { name: "Aa", value: '"Kumbh Sans"' },
                { name: "Aa", value: '"Roboto Slab"' },
                { name: "Aa", value: '"Space Mono"' },
              ]}
              selectionName="fontFamily"
              defaultValue={fontFamily}
              onChange={(value) =>
                setTemporarySettingsState((prevState) => ({
                  ...prevState,
                  temporaryFontFamily: value as FontFamily,
                }))
              }
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
            <Box
              as="h4"
              textStyle="h4"
              color="pomodoro.spaceCadetDark"
              mb={[5, 0]}
            >
              {t("Settings:COLOR")}
            </Box>
            <PrimaryColorSelectionGroup
              options={["#F87070", "#70F3F8", "#D881F8"]}
              selectionName="primaryColor"
              defaultValue={primaryColor}
              onChange={(value) =>
                setTemporarySettingsState((prevState) => ({
                  ...prevState,
                  temporaryPrimaryColor: value as PrimaryColor,
                }))
              }
            />
          </Box>
          <Button
            variant="primary-light"
            size="long"
            position="absolute"
            left="50%"
            bottom="-25px"
            transform="translateX(-50%)"
            onClick={() => saveSettings()}
          >
            {t("Settings:APPLY")}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
