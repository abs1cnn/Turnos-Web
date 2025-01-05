import React from "react";
import "./Navbar.css"; // Archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar-vertical">
      <div className="navbar-logo">
        <h1>MiApp</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
        <li>
          <a href="#about">Acerca</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
