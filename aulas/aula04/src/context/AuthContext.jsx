import { createContext, useState } from "react";

//cria contexto
const AuthContext = createContext();

//cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    //chamar a API passando dados
    setUsuario({ id: 0, nome: "GUvon", email: "guvon@email.com" });
    setLogado(true);
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

export { AuthContext, AuthProvider };
