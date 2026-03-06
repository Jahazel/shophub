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
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem("currentUser");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  function signUp(name, email, password) {
    const existingUser = users.find((user) => user?.email === email);

    if (existingUser) {
      return { success: false, message: "Email already in use" };
    }

    const updatedUsers = [
      ...users,
      {
        name: name,
        email: email,
        password: password,
      },
    ];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true };
  }

  function login(email, password) {
    const existingUser = users.find((user) => user?.email === email);

    if (!existingUser) {
      return { success: false, message: "No account found with that email." };
    }

    if (existingUser.password !== password) {
      return {
        success: false,
        message: "Incorrect password. Please try again.",
      };
    }

    setCurrentUser(existingUser);
    localStorage.setItem("currentUser", JSON.stringify(existingUser));

    return { success: true };
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider value={{ signUp, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
