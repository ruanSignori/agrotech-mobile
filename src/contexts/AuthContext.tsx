import * as WebBrowser from "expo-web-browser";
import React, { createContext, ReactNode, useMemo, useState } from "react";

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "../services/firebase";

type User = {
  id: string;
};

type AuthContextType = {
  user: User | null;
  createUserWithEmail: (email: string, password: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  singInWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const handleErrorSignInLogs = (code: any) => {
  switch (code) {
    case "auth/invalid-email":
      throw new Error("E-mail inválido");
    case "auth/internal-error":
      throw new Error("Verifique os dados e tente novamente");
    case "auth/missing-email":
      throw new Error("Digite um e-mail");
    case "auth/weak-password":
      throw new Error("Senha deve conter pelo menos 6 caracteres");
    default:
  }
};

WebBrowser.maybeCompleteAuthSession();

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const createUserWithEmail = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCreated) => {
        const { uid } = userCreated.user;

        setUser({
          id: uid,
        });
      })
      .catch((error) => {
        const { code } = error;

        handleErrorSignInLogs(code as string);
      });
  };

  const signInWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { uid } = userCredential.user;

        setUser({
          id: uid,
        });
      })
      .catch((error) => {
        const { code } = error;

        handleErrorSignInLogs(code);
      });
  };

  const singInWithGoogle = async () => {
    console.log("press");
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Redefinir senha", "Enviamos um e-mail para você");
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
      singInWithGoogle,
      resetPassword,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={dependenciesValue}>
      {children}
    </AuthContext.Provider>
  );
}
