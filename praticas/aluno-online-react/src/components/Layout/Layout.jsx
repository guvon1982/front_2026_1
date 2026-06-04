import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Layout.css';

function Layout({ onLogout }) {
  return (
    <section className="app-grid">
      <Sidebar onLogout={onLogout} />
      <section className="app-content">
        <Topbar />
        <main className="main-render-area">
          <Outlet />
        </main>
      </section>
    </section>
  );
}

export default Layout;
