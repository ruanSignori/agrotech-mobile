import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import register from "../../assets/animation/register.json";
import { styles } from "./styles";

export function Register() {
  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate("signIn");
  };
  return (
    <View style={styles.container}>
      <Lottie
        style={{ width: 325 }}
        source={register}
        autoPlay
        loop
        resizeMode="contain"
      />
      <Text style={styles.subTitle}>Registre sua conta gratuitamente</Text>
      <View>
        <Text>Já possui conta?</Text>
        <TouchableOpacity onPress={() => handleOpenScreen()}>
          <Text>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
