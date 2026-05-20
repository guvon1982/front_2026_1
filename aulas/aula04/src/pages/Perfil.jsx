import { useParams } from "react-router";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const salvar = (data) => console.log(data);

  const regras = {
    nome: {
      required: "Nome é obrigatório",
      minLength: {
        value: 3,
        message: "O nome precisa ter no mínimo 3 caracteres.",
      },
      maxLength: { value: 100, message: "Nome tem no máximo 100 caracteres." },
    },
    email: {
      required: "Email é obrigatório",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Email inválido",
      },
    },
    nascimento: {
      validate: {
        dataMinima: (value) => {
          if (!value) return true; // Evita quebrar se o campo estiver vazio e não for obrigatório
          const limite = new Date("1900-01-01").getTime();
          const dataDigitada = Date.parse(value);
          return dataDigitada >= limite || "Data inválida (deve ser após 1900)";
        },
        dataMaxima: (value) => {
          if (!value) return true;
          return (
            Date.parse(value) <= new Date() || "A data não pode ser no futuro"
          );
        },
      },
    }, // <--- A vírgula que faltava aqui!
    telefone: {
      required: "Telefone é obrigatório",
      pattern: {
        value: /^(\(?\d{2}\)?[\s.-]?)?(\d{4,5})[\s.-]?(\d{4})$/,
        message: "Telefone inválido",
      },
    },
  };

  return (
    <>
      <h1>Perfil do Usuário {id}</h1>

      <form onSubmit={handleSubmit(salvar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" {...register("nome", regras.nome)} />
          {errors?.nome && (
            <p style={{ color: "red" }}>{errors.nome.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", regras.email)} />
          {errors?.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="nascimento">Data de Nascimento</label>
          {/* Agora passando regras.nascimento corretamente aqui: */}
          <input
            type="date"
            id="nascimento"
            {...register("nascimento", regras.nascimento)}
          />
          {errors?.nascimento && (
            <p style={{ color: "red" }}>{errors.nascimento.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            {...register("telefone", regras.telefone)}
          />
          {errors?.telefone && (
            <p style={{ color: "red" }}>{errors.telefone.message}</p>
          )}
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Perfil;
