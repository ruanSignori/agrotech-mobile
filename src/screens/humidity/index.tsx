import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DataGarden } from "../../components/DataGarden";
import { database, onValue, ref } from "../../services/firebase";
import { styles } from "./styles";

type DataFirebase = {
  humidity: number | null;
  temperature: number | null;
};

export function Humidity(): JSX.Element {
  const [humidityPercentage, setHumidityPercentage] = useState<number | null>(
    null
  );

  useEffect(() => {
    const statsGardenRef = ref(database, "/stats_garden");

    onValue(statsGardenRef, (value) => {
      const { humidity }: DataFirebase = value.val();
      return () => {
        setHumidityPercentage(humidity);
      };
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {humidityPercentage !== null ? (
        <DataGarden dataFirebase={humidityPercentage} />
      ) : (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size="large" color="#34D399" />
        </SafeAreaView>
      )}
    </>
  );
}
