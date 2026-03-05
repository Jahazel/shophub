import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    try {
      const stored = localStorage.getItem("users");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [currentUser, setCurrentUser] = useState(null);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
