import React from "react";
import { Text } from "react-native";

import * as S from "./style";

type DataGardenProps = {
  dataFirebase: null | number;
};

export function DataGarden({ dataFirebase }: DataGardenProps): JSX.Element {
  return (
    <S.Container>
      <S.Header>
        <Text>{dataFirebase}</Text>
      </S.Header>
    </S.Container>
  );
}
