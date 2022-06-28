/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
  Image,
} from "react-native";

import { styles } from "./styles";

type ButtonMethodSignInProps = {
  image: ImageSourcePropType;
} & TouchableOpacityProps;

export function ButtonMethodSignIn({
  image,
  ...rest
}: ButtonMethodSignInProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
}
