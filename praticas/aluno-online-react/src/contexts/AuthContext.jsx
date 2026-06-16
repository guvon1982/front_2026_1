import { createContext, useContext, useState } from 'react';
import { limparSessao, obterSessaoSalva, salvarSessao } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const sessaoInicial = obterSessaoSalva();
  const [usuario, setUsuario] = useState(sessaoInicial?.usuario ?? null);
  const [token, setToken] = useState(sessaoInicial?.token ?? null);

  const autenticado = Boolean(usuario && token);

  const login = (dadosSessao) => {
    salvarSessao(dadosSessao);
    setUsuario(dadosSessao.usuario);
    setToken(dadosSessao.token);
  };

  const logout = () => {
    limparSessao();
    setUsuario(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error('useAuth deve ser utilizado dentro de AuthProvider.');
  }

  return contexto;
}
