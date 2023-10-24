import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from './firebase';
import { User } from "firebase/auth";

const AuthContext = createContext<{ user: User | null }>({ user: null });

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  const value = {
    user,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user: User | null) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}