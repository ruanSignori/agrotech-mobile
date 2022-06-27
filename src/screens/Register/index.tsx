import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate("signIn");
  };

  const handleRegisterAccount = async () => {
    setIsLoading(true);
    try {
      await createUserWithEmail(email, password);
    } catch (e) {
      console.log(e, "register");
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastrar</Text>
      <View style={styles.form}>
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
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
