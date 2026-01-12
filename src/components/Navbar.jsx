import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/sandbox">Sandbox</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
}

export default Navbar;
