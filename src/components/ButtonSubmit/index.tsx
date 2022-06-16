/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { theme } from "../../styles/themes";
import { Loading } from "../Loading";
import { styles } from "./styles";

type ButtonSubmitProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function ButtonSubmit({
  title,
  isLoading = false,
  ...rest
}: ButtonSubmitProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest} disabled={isLoading}>
      {isLoading ? (
        <Loading color={theme.colors.brand_scundary} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
