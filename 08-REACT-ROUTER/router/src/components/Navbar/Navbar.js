import { Route, Routes, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/"> Inicio </Link>
        <Link to="articles"> Articulos </Link>
        <Link to="catalog"> Catalogo </Link>
        <Link to="user"> Usuario </Link>
      </nav>
    </div>
  );
};
export default Navbar;
