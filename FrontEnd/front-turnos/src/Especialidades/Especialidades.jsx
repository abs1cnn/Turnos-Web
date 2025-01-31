import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Especialidades.css";

const Especialidades = () => {
  const [especialidades, setEspecialidades] = useState([]);  // Estado para almacenar las especialidades
  const [error, setError] = useState(null);  // Estado para manejar errores

  useEffect(() => {
    // Función para obtener especialidades desde el backend
    const fetchEspecialidades = async () => {
      try {
        const response = await axios.get("http://localhost:8881/especialidades", { withCredentials: true })
        .then(response => console.log(response.data))
        .catch(error => console.error("Error:", error));
        setEspecialidades(response.data);  // Guardar los datos en el estado
      } catch (err) {
        setError('Error al cargar las especialidades');  // Manejar errores si la solicitud falla
      }
    };

    fetchEspecialidades();
  }, []);  // El arreglo vacío significa que solo se ejecutará al montar el componente

  return (
    <div>
      <h2>Tabla de Especialidades</h2>
      {error && <p>{error}</p>}  {/* Mostrar error si ocurre */}

      <table border="1" className='tabla-especialidades'>
        <thead>
          <tr className='encabezado'>
            <th>Id</th>
            <th>Especialidad</th>
            <th>Descripción</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Odontologo</td>
            <td>Doctor dientes + minero de caries</td>
          </tr>
        </thead>
        <tbody>
          {especialidades.length === 0 ? (
            <tr>
              <td colSpan="3">No hay especialidades disponibles</td>
            </tr>
          ) : (
            especialidades.map((especialidad) => (
              <tr key={especialidad.idEspecialidade}>
                <td>{especialidad.idEspecialidade}</td>
                <td>{especialidad.nombre}</td>
                <td>{especialidad.descripcion}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Especialidades;
