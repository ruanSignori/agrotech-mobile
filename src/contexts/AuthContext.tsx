import React, { createContext, ReactNode, useMemo, useState } from "react";

type User = {
  id: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const dependenciesValue = useMemo(() => {
    return {
      user,
    };
  }, []);
  return (
    <AuthContext.Provider value={dependenciesValue}>
      {children}
    </AuthContext.Provider>
  );
}
