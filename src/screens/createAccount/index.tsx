/* eslint-disable global-require */
import LottieView from "lottie-react-native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { useAuth } from "../../hooks/useAuth";
import * as S from "./style";

export function CreateAccount() {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.Container />
      <LottieView
        source={require("../../assets/animation/animationLogin.json")}
        autoPlay
        loop
      />
      <TouchableOpacity>
        <Text>create</Text>
      </TouchableOpacity>
    </S.Container>
  );
}
