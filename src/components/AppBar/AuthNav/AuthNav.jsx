import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav className="nav">
      <NavLink
        className="link authLink"
        activeClassName="linkActive"
        to="/register"
        exact
      >
        Registration
      </NavLink>
      <NavLink
        className="link authLink"
        activeClassName="linkActive"
        to="/login"
        exact
      >
        LOGIN
      </NavLink>
    </nav>
  );
};

export default AuthNav;
