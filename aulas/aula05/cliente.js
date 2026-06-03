const url = "http://localhost:3000/produtos";

// POST /
async function criar(produto) {
  try {
    // gera uma requisicao HTTP no JS
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(produto), // converte JS p/ JSON
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }
}

// GET /id
async function obter(produto) {
  try {
    // gera uma requisicao HTTP no JS
    const resposta = await fetch(`${url}/${produto.id}`);
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }      
}

// GET /
async function listar() {
  try {
    // gera uma requisicao HTTP no JS
    const resposta = await fetch(url);
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }    
}

// PUT /id
async function atualizar(produto) {
  try {
    // gera uma requisicao HTTP no JS
    const resposta = await fetch(`${url}/${produto.id}`, {
      method: "PUT",
      body: JSON.stringify(produto), // converte JS p/ JSON
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }    
}

// DELETE /id
async function remover(produto) {
  try {
    // gera uma requisicao HTTP no JS
    const resposta = await fetch(`${url}/${produto.id}`, {
        method: "DELETE"
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }
}

export { criar, obter, listar, atualizar, remover };
