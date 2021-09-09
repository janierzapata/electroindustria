import React, { useEffect, useState } from "react";

import { getElements } from "../../../../../../services/api/userService";

export const TableProducts = () => {
  const [elements, setElements] = useState([]);

  function getelements() {
    getElements().then((res) => {
      setElements(res);
    });
  }

  useEffect(() => {
    getelements();
  }, []);

  console.log(elements);

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

            <th scope="col">IMAGEN</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((prop) => (
            <tr key={prop.id}>
              <th scope="row">{prop.id}</th>
              <td>{prop.nombre}</td>
              <td>{prop.location}</td>
              <td>{prop.linea}</td>
              <td>{prop.grupo}</td>
              <td>{prop.subgrupo}</td>
              <td>{prop.referencia}</td>
              <td>{prop.cantidad}</td>
              <td>
                <a rel="noreferrer" href='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' target="_blank">{"imagen" + prop.nombre}</a>

                {/*
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                  alt={"imagen " + prop.nombre}
                  width="200"
                  height="100"
                />

                 */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
