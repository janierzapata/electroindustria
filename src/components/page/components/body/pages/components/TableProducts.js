import React from "react";
import {mostrar} from '../../../../../../services/api/userService'

export const TableProducts = () => {

  console.log('respuesta: ',mostrar().data);

  
  return (
    <div>
      <table className=" table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">CODIGO</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">UBICACION</th>
            <th scope="col">LINEA</th>
            <th scope="col">GRUPO</th>
            <th scope="col">SUB GRUPO</th>
            <th scope="col">REFERENCIA</th>
            <th scope="col">CANTIDAD</th>
            <th scope="col">SALIDA</th>
            <th scope="col">IMAGEN</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
