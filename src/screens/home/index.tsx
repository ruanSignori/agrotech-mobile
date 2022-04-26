import React from "react";
import { LogBox } from "react-native";

import { DataGarden } from "../../components/dataGarden";
import { Header } from "../../components/header";
import * as S from "./style";

LogBox.ignoreLogs(["Setting a timer"]);

export function Home(): JSX.Element {
  return (
    <S.Container>
      <Header />
      <DataGarden />
    </S.Container>
  );
}
