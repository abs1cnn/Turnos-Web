import React from 'react';
import './SeleccionServicios.css'
import { Link } from 'react-router-dom';

const SeleccionServicios = () => {
  return (
    <div className="servicios-container">
      <div>
        <Link className="servicio-boton" to="/servicio1">
          Gestion de turnos
        </Link>
      </div>
      <div>
        <Link className="servicio-boton" to="/servicio2">
          Pacientes
        </Link>
      </div>
      <div>
        <Link className="servicio-boton" to="/Especialidades">
          Especialidades
        </Link>
      </div>
      <div>
        <Link className="servicio-boton" to="/servicio4">
          Obras sociales
        </Link>
      </div>
    </div>
  );
};

export default SeleccionServicios;
