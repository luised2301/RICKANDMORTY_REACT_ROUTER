import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="character">Character</Link>
      <Link to="episode">Episode</Link>
      <Link to="location">Location</Link>
    </nav>
  );
};

export default Navbar;
