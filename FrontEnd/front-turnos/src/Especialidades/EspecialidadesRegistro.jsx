import React, { useEffect, useState } from "react";
import axios from "axios";

const EspecialidadesRegistro = ({ especialidadEditar, onGuardado }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (especialidadEditar) {
      setNombre(especialidadEditar.nombre || "");
      setDescripcion(especialidadEditar.descripcion || "");
    } else {
      setNombre("");
      setDescripcion("");
    }
  }, [especialidadEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const especialidadData = { nombre, descripcion };

    try {
      if (especialidadEditar) {
        // EDITAR (PUT)
        await axios.put(`http://localhost:8881/especialidades/${especialidadEditar.idEspecialidade}`, especialidadData);
      } else {
        // CREAR NUEVA (POST)
        await axios.post("http://localhost:8881/especialidades", especialidadData);
      }

      onGuardado(); // Recargar lista
    } catch (err) {
      alert("Error al guardar la especialidad");
    }
  };

  return (
    <div>
      <h2>{especialidadEditar ? "Editar Especialidad" : "Nueva Especialidad"}</h2>
      <center>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" id="id-nom-esp" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

          <label>Descripción:</label>
          <input type="text" id="id-desc-esp" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

          <button type="submit">{especialidadEditar ? "Actualizar" : "Guardar"}</button>
        </form>        
      </center>
    </div>
  );
};

export default EspecialidadesRegistro;
