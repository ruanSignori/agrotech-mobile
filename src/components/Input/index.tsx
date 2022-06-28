/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { theme } from "../../styles/themes";
import { styles } from "./styles";

type InputProps = {
  errorEvent?: boolean;
} & TextInputProps;

export function Input({ errorEvent = false, ...rest }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.gray}
      {...rest}
    />
  );
}
