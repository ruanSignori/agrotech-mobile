import React from "react";
import { LogBox } from "react-native";

import * as S from "./style";

LogBox.ignoreLogs(["Setting a timer"]);

export function Home(): JSX.Element {
  return <S.Container />;
}
