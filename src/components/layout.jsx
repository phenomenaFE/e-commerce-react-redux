import { Outlet } from "react-router-dom";
import NavBar from "./organisms/navbar";

function Layout() {
  return (
    <div className="header">
      <NavBar />

      <Outlet />

      <footer className="p-3 bg-light text-center">
        <p className="mb-0 fw-bold">copy right reserved</p>
      </footer>
    </div>
  );
}

export default Layout;
