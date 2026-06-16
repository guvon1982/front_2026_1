const API_URL = 'http://localhost:3000';

export const CHAVE_USUARIO = 'alunoOnlineUsuario';
export const CHAVE_TOKEN = 'alunoOnlineToken';

const gerarToken = (usuario) => {
  const conteudoToken = `${usuario.id}:${usuario.email}:${Date.now()}`;
  return btoa(conteudoToken);
};

export const autenticarUsuario = async ({ email, senha }) => {
  const resposta = await fetch(`${API_URL}/usuarios?email=${encodeURIComponent(email)}`);

  if (!resposta.ok) {
    throw new Error('Não foi possível acessar o servidor de autenticação.');
  }

  const [usuarioEncontrado] = await resposta.json();

  if (!usuarioEncontrado || usuarioEncontrado.senha !== senha) {
    throw new Error('E-mail ou senha inválidos.');
  }

  const { senha: _senha, ...usuarioSeguro } = usuarioEncontrado;

  return {
    usuario: usuarioSeguro,
    token: gerarToken(usuarioSeguro),
  };
};

export const salvarSessao = ({ usuario, token }) => {
  localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
  localStorage.setItem(CHAVE_TOKEN, token);
};

export const obterSessaoSalva = () => {
  const usuarioSalvo = localStorage.getItem(CHAVE_USUARIO);
  const tokenSalvo = localStorage.getItem(CHAVE_TOKEN);

  if (!usuarioSalvo || !tokenSalvo) {
    return null;
  }

  try {
    return {
      usuario: JSON.parse(usuarioSalvo),
      token: tokenSalvo,
    };
  } catch {
    localStorage.removeItem(CHAVE_USUARIO);
    localStorage.removeItem(CHAVE_TOKEN);
    return null;
  }
};

export const limparSessao = () => {
  localStorage.clear();
};
