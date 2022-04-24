import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { LogBox, Text, ActivityIndicator } from "react-native";

import { database, ref, onValue } from "../../services/firebase";
import * as S from "./style";

LogBox.ignoreLogs(["Setting a timer"]);

type dataOfGarden = {
  temperature: number;
  humidity: number;
};

export function Home(): JSX.Element {
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
    <>
      <StatusBar translucent />
      <S.Container>
        {!dataGarden.humidity && !dataGarden.temperature ? (
          <ActivityIndicator color="#34D399" />
        ) : (
          <>
            <Text>Umidade do solo {dataGarden.humidity}%</Text>
            <Text>Temperatura do ambiente {dataGarden.temperature} C°</Text>
          </>
        )}
      </S.Container>
    </>
  );
}
