import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { useAuth } from "../../hooks/useAuth";
import * as S from "./style";

export function CreateAccount() {
  const { user } = useAuth();

  return (
    <S.Container>
      <TouchableOpacity onPress={() => ""}>
        <Text>Logar de forma anônima</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ""}>
        <Text>Logar com o google</Text>
      </TouchableOpacity>

      <Text>{user?.id || "false"}</Text>
    </S.Container>
  );
}
