import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DataGarden } from "../../components/DataGarden";
import { database, onValue, ref } from "../../services/firebase";

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
      const data: DataFirebase = value.val();
      setHumidityPercentage(data.humidity);
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {humidityPercentage !== null ? (
        <DataGarden dataFirebase={humidityPercentage} />
      ) : (
        <SafeAreaView
          style={{
            alignContent: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <ActivityIndicator size="large" color="#34D399" />
        </SafeAreaView>
      )}
    </>
  );
}
