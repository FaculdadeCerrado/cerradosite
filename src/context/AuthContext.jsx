import { createContext, useEffect, useState } from "react";
import ConfigService from "../service/configService";

export const AuthContext = createContext();
const { API_URL } = ConfigService; // usa mesma URL dos seus serviços

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // carregar usuário automaticamente
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch(`${API_URL}/auth/me.php`, {
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setUser(data.user);
          else logout();
        })
        .catch(() => logout());
    }
  }, []);

  // login
  const login = async (email, senha) => {
    const res = await fetch(`${API_URL}auth/login.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      setUser(data.user);
      return { success: true };
    }

    return { success: false, message: data.message };
  };

  // registro
  const register = async (nome, email, senha) => {
    const res = await fetch(`${API_URL}auth/register.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha }),
    });

    return await res.json();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
