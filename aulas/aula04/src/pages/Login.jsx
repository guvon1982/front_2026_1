import { useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const handleEntrar = () => {
    login({ usuario: "guvon@email.com", senha: "123456" });
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
