import React, { createContext, ReactNode, useContext, useState } from "react";

interface userAuth {
  login: boolean;
  email: string;
  id: string;
}

const empty: userAuth = {
  login: false,
  email: "",
  id: "",
};

export const AuthContext = createContext<{
  signIn: (data: userAuth) => void;
  signOut: () => void;
  getUser: userAuth;
}>({
  signIn: () => console.warn("no auth provider"),
  signOut: () => console.warn("no auth provider"),
  getUser: empty,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<userAuth>(empty);

  const contextValue = {
    signIn: (data: userAuth) => setIsLoggedIn(data),
    signOut: async () => {
      setIsLoggedIn(empty);
    },
    getUser: isLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
