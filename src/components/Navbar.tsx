import React from "react";
import { TRoutes } from "../router/routes";
import { NavLink, Outlet } from "react-router-dom";
type NavbarProps = {
  routes: TRoutes[];
  vertical: boolean;
};
const Navbar: React.FC<NavbarProps> = ({ routes, vertical }) => {
  return (
    <>
      <nav className={`navbar ${vertical ? "vertical" : "horizontal"}`}>
        {routes.map(({ path, label }) => (
          <NavLink to={path}>{label}</NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
