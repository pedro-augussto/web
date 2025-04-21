import { createContext, ReactNode } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ name: "Pedro", email: "pedro@email.com" }}>
      {children}
    </AuthContext.Provider>
  );
}
