import React from "react";
import { LogBox, Text } from "react-native";

import { useAuth } from "../../hooks/useAuth";
import * as S from "./style";

LogBox.ignoreLogs(["Setting a timer"]);

export function Home(): JSX.Element {
  const { user } = useAuth();
  return (
    <S.Container>
      <Text>{user || "false"}</Text>
    </S.Container>
  );
}
