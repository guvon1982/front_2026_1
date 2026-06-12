import { createContext, useContext, useState } from "react";
import { autenticar } from "../services/authService";

//cria contexto
const AuthContext = createContext();

//cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = async (dados) => {
    const resposta = await autenticar(dados);
    if (resposta?.token) {
      setUsuario(resposta);
      setLogado(true);
      return;
    }

    throw new Error("credenciais invalidas");
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {/* value = estado compartilhado */}
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };
