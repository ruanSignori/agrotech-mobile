import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import welcome from "../../assets/animation/welcome.json";
import GoogleIconSrc from "../../assets/images/google-icon.png";
import UserSecretSrc from "../../assets/images/user-secret-solid.png";
import { ButtonMethodSignIn } from "../../components/ButtonMethodSignIn";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { theme } from "../../styles/themes";
import { styles } from "./styles";

export function SignIn() {
  const { signInWithEmail, resetPassword, singInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate("register");
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithEmail(email, password);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleSignInWithGoogle = async () => {
    await singInWithGoogle();
  };

  const handleForgotPassword = async () => {
    await resetPassword(email);
  };

  return (
    <View style={styles.container}>
      <Lottie
        style={styles.animation}
        source={welcome}
        autoPlay
        loop
        resizeMode="contain"
      />
      <Text style={styles.heading}>Entrar</Text>
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" value={password} onChangeText={setPassword} />
      <ButtonSubmit
        title="Entrar"
        onPress={() => handleSignIn()}
        isLoading={isLoading}
      />
      <Text style={styles.text}>ou, entre com...</Text>

      <View style={styles.signInWith}>
        <ButtonMethodSignIn
          image={GoogleIconSrc}
          onPress={() => handleSignInWithGoogle()}
        />
        <ButtonMethodSignIn image={UserSecretSrc} />
      </View>

      <View style={styles.others}>
        <TouchableOpacity
          style={styles.otherIcons}
          onPress={() => handleOpenScreen()}
        >
          <MaterialCommunityIcons
            name="account-plus"
            size={24}
            color={theme.colors.text}
            style={styles.icons}
          />
          <Text>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.otherIcons}
          onPress={() => handleForgotPassword()}
        >
          <Ionicons
            name="mail"
            size={24}
            color={theme.colors.text}
            style={styles.icons}
          />
          <Text>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
