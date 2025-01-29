import React from 'react';

const Servicio2 = () => {
  return <div>
    <table>
      <thead>
            <tr>
                <th>Legajo</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>Mail</th>
                <th>Telefono</th>
                <th>Obra social</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>2025-01-10</td>
                <td>10:00 AM</td>
                <td>Odontología</td>
                <td>ji</td>
                <td>
                    <button>Editar</button>
                    <button>Cancelar</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>María López</td>
                <td>2025-01-11</td>
                <td>11:30 AM</td>
                <td>Dermatología</td>
                <td>je</td>
                <td>
                    <button>Editar</button>
                    <button>Cancelar</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>;
};

export default Servicio2;
