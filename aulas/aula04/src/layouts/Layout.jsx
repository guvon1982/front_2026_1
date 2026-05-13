import { Navigate, Outlet } from "react-router";
import Menu from "../components/Menu";
import { useAuthContext } from "../context/AuthContext";

function Layout() {
  const { logado } = useAuthContext();

  return (
    <>
      {logado ? (
        <>
          <aside>
            <Menu />
          </aside>
          <main>
            {/* inserir a página */}
            <Outlet />
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
      ;
    </>
  );
}

export default Layout;
