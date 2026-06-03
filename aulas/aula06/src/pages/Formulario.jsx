import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { criar } from "../services/produtoService";

function Formulario() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const salvar = async (dados) => {
    await criar(dados);
    navigate("/produtos");
  };

  return (
    <>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit(salvar)}>
        <input type="text" placeholder="Nome" {...register("nome")} />
        <input type="text" placeholder="Preço 0.00" {...register("preco")} />
        <input type="text" placeholder="Unidade" {...register("unidade")} />
        <Link to="/produtos/">Desistir</Link>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Formulario;
