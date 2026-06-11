const BASE_URL = 'http://localhost:3000/requerimentos';

const verificarResposta = async (resposta) => {
  if (!resposta.ok) {
    throw new Error('Não foi possível concluir a operação.');
  }

  return resposta.json();
};

export const listarRequerimentos = async () => {
  const resposta = await fetch(BASE_URL);
  return verificarResposta(resposta);
};

export const cadastrarRequerimento = async (requerimento) => {
  const resposta = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requerimento),
  });

  return verificarResposta(resposta);
};
