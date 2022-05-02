import {} from "firebase/auth";
import React, { createContext, ReactNode, useMemo, useState } from "react";

import { auth } from "../services/firebase";

type User = {
  id: string;
  name?: string;
  isAnonymous?: boolean;
  photoURL?: string;
};

type AuthContextType = {
  user: User | undefined;
  sigInWithUsername: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const password = "12313";

  const dependenciesProvider = useMemo(() => ({ user }), []);

  return (
    <AuthContext.Provider value={dependenciesProvider}>
      {children}
    </AuthContext.Provider>
  );
}
