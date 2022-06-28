/* eslint-disable @typescript-eslint/no-explicit-any */
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import register from "../../assets/animation/register.json";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { theme } from "../../styles/themes";
import { styles } from "./styles";

export function Register() {
  const { createUserWithEmail } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate("signIn");
  };

  const handleRegisterAccount = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      await createUserWithEmail(email, password);
    } catch (e) {
      const { message }: any = e;
      setErrorMessage(message as string);
    }

    setIsLoading(false);
  };

  console.log(errorMessage.length > 0);

  return (
    <View style={styles.container}>
      <Lottie
        style={styles.animation}
        source={register}
        autoPlay
        loop
        resizeMode="contain"
      />
      <Text style={styles.heading}>Cadastrar</Text>
      <View style={styles.form}>
        <Input
          errorEvent={errorMessage.length >= 1}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          errorEvent={errorMessage.length >= 1}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage.length > 1 && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
      <ButtonSubmit
        title="Criar conta"
        isLoading={isLoading}
        onPress={() => handleRegisterAccount()}
        disabled={isLoading}
      />
      <TouchableOpacity
        onPress={() => handleOpenScreen()}
        style={styles.backScreen}
      >
        <AntDesign name="arrowleft" size={24} color={theme.colors.brand} />
        <Text style={styles.textButton}>Eu já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}
