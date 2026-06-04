import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Layout.css';

function Layout() {
  return (
    <section className="app-grid">
      <Sidebar />
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
