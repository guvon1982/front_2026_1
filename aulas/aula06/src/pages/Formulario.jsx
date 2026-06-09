import { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { criar, modificar, obter } from "../services/produtoService";

function Formulario() {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const salvar = async (dados) => {
    if (id) {
      await modificar({id, ...dados});
    } else {
      await criar (dados);
    }
    navigate("/produtos");
  };

useEffect(() => {
  const disparar = async() => {
    const produto = await obter({id});
    reset (produto);
  }
  if (id) disparar(); //dispara só qdo modificar
}, [])

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
