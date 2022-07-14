import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  auth,
  GoogleAuthProvider,
  signInWithCredential,
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
  resetPassword: (email: string) => Promise<void>;
  singInWithGoogle: () => Promise<void>;
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

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "833100699119-db4b2ii1130p9c1s0kfmog42n1btsarl.apps.googleusercontent.com",
  });

  const singInWithGoogle = useCallback(async () => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }

    await promptAsync();
  }, [response]);

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
      resetPassword,
      singInWithGoogle,
    };
  }, [user]);
  return (
    <AuthContext.Provider value={dependenciesValue}>
      {children}
    </AuthContext.Provider>
  );
}
