/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { theme } from "../../styles/themes";
import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.gray}
      {...rest}
    />
  );
}
