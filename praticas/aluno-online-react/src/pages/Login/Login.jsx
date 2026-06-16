import { useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../../components/Input/Input';
import { useAuth } from '../../contexts/AuthContext';
import { autenticarUsuario } from '../../services/authService';
import iconeChapeu from '../../assets/learn.svg';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [errors, setErrors] = useState({});
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name] || errors.root) {
      setErrors({ ...errors, [name]: '', root: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.email) newErrors.email = 'O campo de email é obrigatório.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Formato de e-mail inválido.';

    if (!formData.senha) newErrors.senha = 'O campo de senha é obrigatório.';
    else if (formData.senha.length < 6) newErrors.senha = 'A senha deve ter no mínimo 6 caracteres.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setCarregando(true);
    setErrors({});

    try {
      const sessao = await autenticarUsuario(formData);
      login(sessao);
      navigate('/', { replace: true });
    } catch (error) {
      setErrors({
        root: error.message,
      });
    } finally {
      setCarregando(false);
    }
  };

  return (
    <main className="login-wrapper">
      <section className="login-card">
        <header className="login-header">
          <figure className="login-logo-container">
            <img src={iconeChapeu} alt="Logo Aluno Online" className="login-logo-img" />
          </figure>
          <h1 className="login-title">Aluno Online</h1>
        </header>

        <form onSubmit={handleSubmit} noValidate className="login-form">
          <Input
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleChange}
            error={errors.senha}
          />
          {errors.root && (
            <p className="login-error" role="alert">
              {errors.root}
            </p>
          )}
          <button type="submit" className="login-submit" disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </section>

      <footer className="login-footer">
        <small>© 2026. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
};

export default Login;
