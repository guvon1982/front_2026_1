const url = "http://localhost:3000/usuarios";

async function autenticar(credenciais) {
  const { email, senha } = credenciais;
  const resposta = await fetch(`${url}?email=${email}`);
  const usuario = await resposta.json();

  //SABOR AUTENTICACAO
  if (usuario[0]?.email === email && usuario[0]?.senha === senha) {
    return {
      email,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
    };
  }
  return { email: "", token: "" };
}

export { autenticar };
