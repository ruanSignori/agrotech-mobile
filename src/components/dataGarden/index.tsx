import React, { useEffect, useState } from "react";
import { Text, ActivityIndicator } from "react-native";

import { database, onValue, ref } from "../../services/firebase";
import * as S from "./style";

type dataOfGarden = {
  temperature: number;
  humidity: number;
};

export function DataGarden(): JSX.Element {
  const [dataGarden, setDataGarden] = useState<dataOfGarden>({
    humidity: 0,
    temperature: 0,
  });

  useEffect(() => {
    const statsGardenRef = ref(database, "/stats_garden");

    onValue(statsGardenRef, (value) => {
      const data: dataOfGarden = value.val();
      setDataGarden({ ...data });
    });
  }, []);

  return (
    <S.Container>
      {/* <ActivityIndicator color="#34D399" /> */}
      <Text>{dataGarden.humidity}</Text>
      <Text>{dataGarden.temperature}</Text>
    </S.Container>
  );
}
