import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { useAuth } from "../../hooks/useAuth";
import * as S from "./style";

export function CreateAccount() {
  const { user, signInAnonymous, signInWithGoogle } = useAuth();

  const handleAcessAnonymous = async () => {
    if (!user) await signInAnonymous();
  };

  const handleAcessGoogle = async () => {
    if (!user) await signInWithGoogle();
  };

  console.log(`rota ${user}`);

  return (
    <S.Container>
      <TouchableOpacity onPress={() => handleAcessAnonymous()}>
        <Text>Logar de forma anônima</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAcessGoogle()}>
        <Text>Logar com o google</Text>
      </TouchableOpacity>

      <Text>{user?.id || "false"}</Text>
    </S.Container>
  );
}
