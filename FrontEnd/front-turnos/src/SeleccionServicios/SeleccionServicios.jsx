import React from 'react';
import './SeleccionServicios.css'
import { Link } from 'react-router-dom';

const SeleccionServicios = () => {
  return (
    <div className="servicios-container">
      <div className="servicio-boton">
        <Link to="/servicio1">
          Servicio 1
        </Link>
      </div>
      <div className="servicio-boton">
        <Link to="/servicio2">
          Servicio 2
        </Link>
      </div>
      <div className="servicio-boton">
        <Link to="/servicio3">
          Servicio 3
        </Link>
      </div>
      <div className="servicio-boton">
        <Link to="/servicio4">
          Servicio 4
        </Link>
      </div>
    </div>
  );
};

export default SeleccionServicios;
