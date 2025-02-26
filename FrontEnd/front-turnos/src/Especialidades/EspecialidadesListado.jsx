import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Especialidades.css";
import EspecialidadesRegistro from "./EspecialidadesRegistro";

const EspecialidadesListado = () => {
  const [especialidades, setEspecialidades] = useState([]);
  const [error, setError] = useState(null);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [sumadorCliks, setSumador] = useState(0);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [especialidadEditar, setEspecialidadEditar] = useState(null);

  useEffect(() => {
    fetchEspecialidades();
  }, []);

  const fetchEspecialidades = async () => {
    try {
      const response = await axios.get("http://localhost:8881/especialidades");
      setEspecialidades(response.data);
    } catch (err) {
      setError(`Error al cargar las especialidades: ${err.message}`);
    }
  };

  // Función para filtrar especialidades por nombre
  const especialidadesFiltradas = especialidades.filter((esp) =>
    esp.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  const handleMostrarRegistro = () => {
    setEspecialidadEditar(null);
    setMostrarRegistro(true);
  };

  const handleEditar = (especialidad) => {
    setEspecialidadEditar(especialidad);
    setMostrarRegistro(true);
  };

  const handleEliminar = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta especialidad?")) {
      try {
        await axios.delete(`http://localhost:8881/especialidades/${id}`);
        fetchEspecialidades();
      } catch (err) {
        alert("Error al eliminar la especialidad");
      }
    }
  };

  return (
    <div>
      {mostrarRegistro ? (
        <div>
          <EspecialidadesRegistro especialidadEditar={especialidadEditar} onGuardado={() => {
            fetchEspecialidades();
            setMostrarRegistro(false);
          }} />
          <button onClick={() => setMostrarRegistro(false)}>Volver al listado</button>
        </div>
      ) : (
        <div>
          <h2>Tabla de Especialidades</h2>

          {/* Campo para buscar por nombre */}
          <div className="obra-social-container">
            <label>Buscar por nombre:</label>
            <input
              type="text"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
              placeholder="Ingrese el nombre de la especialidad"
            />
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
              {especialidadesFiltradas.length === 0 ? (
                <tr>
                  <td colSpan="4">No se encontraron especialidades</td>
                </tr>
              ) : (
                especialidadesFiltradas.map((especialidad) => (
                  <tr key={especialidad.idEspecialidade}>
                    <td>{especialidad.idEspecialidade}</td>
                    <td>{especialidad.nombre}</td>
                    <td>{especialidad.descripcion}</td>
                    <td>
                      <button onClick={() => handleEditar(especialidad)}>Editar</button>
                      <button onClick={() => handleEliminar(especialidad.idEspecialidade)}>Eliminar</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div>
            <button className="new-esp" onClick={handleMostrarRegistro}>
              Nueva Especialidad
            </button>
            <button onClick={() => setSumador(sumadorCliks + 1)}>Incrementar</button>
            <p>Contador: {sumadorCliks}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EspecialidadesListado;
