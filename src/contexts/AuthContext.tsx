import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { createContext, ReactNode, useMemo, useState } from "react";

import {
  auth,
  signInAnonymously,
  onAuthStateChanged,
} from "../services/firebase";

type User = {
  id: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signInAnonymous: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, uid } = result.user;

      if (!displayName) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
      });
    }
  };

  // const generateHandleNum = useCallback(() => {
  //   const value = Math.floor(Math.random() * 100) + 500;
  //   return value.toString();
  // }, []);

  const signInAnonymous = async () => {
    await signInAnonymously(auth);
    onAuthStateChanged(auth, (userCreated) => {
      if (userCreated) {
        const { uid, displayName } = userCreated;

        setUser({
          id: uid,
          name: displayName || `Usuário`,
        });
      } else {
        throw new Error("Não foi possivel logar de forma anonima");
      }
    });
  };

  const dependencieValues = useMemo(() => {
    return {
      user,
      signInWithGoogle,
      signInAnonymous,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={dependencieValues}>
      {children}
    </AuthContext.Provider>
  );
}
