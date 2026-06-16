import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dadosUsuario) => {
    setUsuario(dadosUsuario);
    setAutenticado(true);
  };

  const logout = () => {
    setUsuario(null);
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
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
