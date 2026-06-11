import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { cadastrarRequerimento } from '../services/requerimentoService';
import './RequerimentoForm.css';

const dataAtual = () => new Date().toISOString().slice(0, 10);

function RequerimentoForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
      data: dataAtual(),
    },
  });

  const onSubmit = async (dados) => {
    try {
      const novoRequerimento = await cadastrarRequerimento({
        ...dados,
        status: 'Em análise',
      });

      console.log('Novo requerimento:', novoRequerimento);
      reset({
        tipo: '',
        descricao: '',
        data: dataAtual(),
      });
      navigate('/requerimentos');
    } catch {
      setError('root', {
        message: 'Não foi possível salvar o requerimento. Verifique se a API está em execução.',
      });
    }
  };

  return (
    <main className="requerimento-form-container">
      <header className="requerimento-form-header">
        <h1 className="requerimento-form-title">Meus Requerimentos</h1>
        <h2 className="requerimento-form-subtitle">Novo Requerimento</h2>
      </header>

      <form className="requerimento-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <section className="form-field">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select
            id="tipo"
            {...register('tipo', {
              required: 'Tipo é obrigatório',
            })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Revisão de Menção">Revisão de Menção</option>
            <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
            <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
            <option value="Mudança de Turno">Mudança de Turno</option>
            <option value="Renovação de Matrícula">Renovação de Matrícula</option>
          </select>
          {errors.tipo && <span className="form-error">{errors.tipo.message}</span>}
        </section>

        <section className="form-field">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            {...register('descricao', {
              required: 'Descrição é obrigatória',
              minLength: {
                value: 10,
                message: 'Descrição deve ter no mínimo 10 caracteres',
              },
            })}
          />
          {errors.descricao && <span className="form-error">{errors.descricao.message}</span>}
        </section>

        <section className="form-field">
          <label htmlFor="data">Data do Requerimento</label>
          <input id="data" type="date" {...register('data')} />
        </section>

        <section className="form-actions">
          <button type="button" className="btn-cancelar" onClick={() => navigate('/requerimentos')}>
            Cancelar
          </button>
          <button type="submit" className="btn-salvar" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </button>
        </section>

        {errors.root && (
          <p className="form-error form-submit-error" role="alert">
            {errors.root.message}
          </p>
        )}
      </form>
    </main>
  );
}

export default RequerimentoForm;
