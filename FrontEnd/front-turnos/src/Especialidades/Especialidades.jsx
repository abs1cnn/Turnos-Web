import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Especialidades.css";

const Especialidades = () => {
  const [especialidades, setEspecialidades] = useState([]);
  const [error, setError] = useState(null);
  const [obraSocial, setObraSocial] = useState(""); // Estado para la obra social

  useEffect(() => {
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get("http://localhost:8881/especialidades");
        setEspecialidades(response.data);
      } catch (err) {
        setError(`Error al cargar las especialidades: ${err.message}`);
      }
    };

    fetchEspecialidades();
  }, []);

  // Función para manejar el botón (por ahora solo muestra en consola)
  const handleBuscar = () => {
    console.log("Obra Social ingresada:", obraSocial);
  };

  return (
    <div>
      <h2>Tabla de Especialidades</h2>

      {/* Campo para ingresar la obra social */}
      <div className="obra-social-container">
        <label>Nombre de Obra Social:</label>
        <input
          type="text"
          value={obraSocial}
          onChange={(e) => setObraSocial(e.target.value)}
          placeholder="Ingrese la obra social"
        />
        <button onClick={handleBuscar}>Buscar</button>
      </div>

      {error && <p className="error">{error}</p>}

      <table border="1" className="tabla-especialidades">
        <thead>
          <tr className="encabezado">
            <th>Id</th>
            <th>Especialidad</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {especialidades.length === 0 ? (
            <tr>
              <td colSpan="4">No hay especialidades disponibles</td>
            </tr>
          ) : (
            especialidades.map((especialidad) => (
              <tr key={especialidad.idEspecialidade}>
                <td>{especialidad.idEspecialidade}</td>
                <td>{especialidad.nombre}</td>
                <td>{especialidad.descripcion}</td>
                <td><button>Editar</button><button>Eliminar</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Especialidades;
