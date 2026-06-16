const BASE_URL = 'http://localhost:3000/requerimentos';
const CHAVE_TOKEN = 'alunoOnlineToken';

export class ErroAutorizacao extends Error {
  constructor(message = 'Sessão expirada. Faça login novamente.') {
    super(message);
    this.name = 'ErroAutorizacao';
    this.status = 401;
  }
}

const obterHeadersAutenticados = () => {
  const token = localStorage.getItem(CHAVE_TOKEN);

  if (!token) {
    throw new ErroAutorizacao();
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

const verificarResposta = async (resposta) => {
  if (resposta.status === 401) {
    throw new ErroAutorizacao();
  }

  if (!resposta.ok) {
    throw new Error('Não foi possível concluir a operação.');
  }

  return resposta.json();
};

export const listarRequerimentos = async () => {
  const resposta = await fetch(BASE_URL, {
    headers: obterHeadersAutenticados(),
  });

  return verificarResposta(resposta);
};

export const cadastrarRequerimento = async (requerimento) => {
  const resposta = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      ...obterHeadersAutenticados(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requerimento),
  });

  return verificarResposta(resposta);
};
