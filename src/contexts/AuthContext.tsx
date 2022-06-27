import React, { createContext, ReactNode, useMemo, useState } from "react";
import { Alert } from "react-native";

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "../services/firebase";

type User = {
  id: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  createUserWithEmail: (email: string, password: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const createUserWithEmail = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCreated) => {
        console.log("Usuário criado com sucesso");
      })
      .catch((e) => {
        const { code } = e;

        switch (code) {
          case "auth/invalid-email":
            throw new Error("A valid e-mail is missing");
          case "auth/internal-error":
            throw new Error("Check the data and try again");
          case "auth/missing-email":
            throw new Error("An email is missing");
          case "auth/weak-password":
            throw new Error("Password must be at least 6 characters long");
          default:
        }
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName } = user;

        setUser({
          id: uid,
          name: displayName as string,
        });
      }
    });
  };

  const signInWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { uid, displayName } = userCredential.user;

        setUser({
          id: uid,
          name: displayName || "UsuárioCriadoAutomatico",
        });
      })
      .catch((e) => {
        return e.code;
      });
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Redefinir senha", "Enviamos um e-mail para você");
      })
      .catch((error) => {
        throw new Error(error.code);
      });
  };

  const dependenciesValue = useMemo(() => {
    return {
      user,
      createUserWithEmail,
      signInWithEmail,
      resetPassword,
    };
  }, [user]);
  return (
    <AuthContext.Provider value={dependenciesValue}>
      {children}
    </AuthContext.Provider>
  );
}
