/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";

import { DataGarden } from "../../components/DataGarden";
import { database, ref, onValue } from "../../services/firebase";

type DataFirebase = {
  humidity: number | null;
  temperature: number | null;
};

export function Temperature(): JSX.Element {
  const [soilTemperature, setSoilTemperature] = useState<number | null>(null);

  useEffect(() => {
    const statsGardenRef = ref(database, "/stats_garden");

    onValue(statsGardenRef, (value) => {
      const data: DataFirebase = value.val();
      setSoilTemperature(data.temperature);
    });
  }, []);

  return (
    <>
      {soilTemperature !== null ? (
        <DataGarden dataFirebase={soilTemperature} />
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
