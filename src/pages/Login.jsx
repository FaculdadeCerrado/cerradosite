import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const ok = await login(email, senha);

    if (!ok) {
      setErro("Credenciais inválidas");
      return;
    }

    navigate("/painel");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {erro && <p className="text-red-500 text-sm">{erro}</p>}

        <label>Email:</label>
        <input
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-4"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Entrar
        </button>
      </form>
    </main>
  );
}
