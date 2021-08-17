import React, { useRef } from "react";

export const AddProduct = () => {

  const refLine = useRef(null);

  function handleLogin(props) {}

  return (
    <div>
      <div className="header-login">
        <h1>Add a New product</h1>
      </div>
      <div className="  login ">
        <div className="mb-3">
          <label className="form-label">
            Nombre del producto
            <input
              type="password"
              className="form-control mt-3"
              // ref={refPass}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Linea
            <select
              ref={refLine}
              className="form-select form-select-lg mb-3 mt-3"
              aria-label=".form-select-lg example"
            >
              <option selected disabled>
                Selecciona una opcion
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </label>
        </div>
        


        <button
          type="submit"
          className="btn btn-login"
          onClick={handleLogin}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};
