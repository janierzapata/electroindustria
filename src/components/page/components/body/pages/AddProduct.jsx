import React, { useCallback, useState } from "react";

import { create } from "../../../../../services/api/userService";
import { Select } from "./components/Select";

const initialForm = {
  name: "",
  ref: "",
  location: "",
  linea: "",
  grupo: "",
  sub: "",
  cant: "",
  urlImg: "",
};

const SelecMemorize = React.memo(Select);

export const AddProduct = () => {
  const [error, setError] = useState(null);
  const [notify, setNotify] = useState(null);
  const [select, setSelect] = useState(false);
  const [espera, setEspera] = useState(false);
  const [formState, setFormState] = useState(initialForm);

  const { name, ref, location, cant } = formState;

  const handleChange = useCallback(
    (e) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    },
    [formState]
  );
  
  const handleAdd = () => {
    setEspera(true);

    if (
      formState.name !== "" &&
      formState.ref !== "" &&
      formState.linea !== "" &&
      formState.location !== "" &&
      formState.grupo !== "" &&
      formState.sub !== "" &&
      formState.cant !== ""
    ) {
      create(formState).then((resp) => {
        if (resp.existe) {
          setError(resp.error);
        } else {
          setFormState(initialForm);
          setError(null);
          setNotify("Se creo el producto exitosamente");
          setSelect(true);
        }
      });
    } else {
      alert("Debes llenar todos los campos");
    }
    setNotify(null);
    setSelect(false);
    setEspera(false);
  };

  return (
    <div>
      <div className="header-login">
        <h1>Add a New product</h1>
      </div>
      <div className="  login ">
        <div className="mb-3 col-md-12">
          <label className="form-label">
            Nombre del Producto
            <input
              type="text"
              name="name"
              value={name}
              className="form-control mt-3"
              onChange={handleChange}
              placeholder="XXXXXXXXXXXXXXXXXXX"
            />
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <div className="mb-3 col-md-6">
            <label className="form-label">
              Referencia Proveedor
              <input
                type="text"
                name="ref"
                value={ref}
                onChange={handleChange}
                className="form-control mt-3"
                placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
              />
            </label>
          </div>
          <div className="mb-3 col-md-5">
            <label className="form-label">
              Ubicacion
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                className="form-control mt-3"
                placeholder="X1 / X2 / X3"
              />
            </label>
          </div>
        </div>

        <SelecMemorize handleOnchange={handleChange} selectState={select} />

        <div className="d-flex justify-content-between">
          <div className="mb-3 col-md-4">
            <label className="form-label">
              Cantidad
              <input
                type="number"
                name="cant"
                onChange={handleChange}
                value={cant}
                className="form-control mt-3"
                placeholder="XX"
                min="0"
              />
            </label>
          </div>
          <div className="mb-3 col-md-7">
            <label className="form-label">
              Imagen
              <input
                type="file"
                accept="image/png"
                className="form-control mt-3"
              />
            </label>
          </div>
        </div>
        {error && (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong> ERROR!! </strong> {error}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {notify && (
          <>
            <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>{notify}</strong>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </>
        )}

        <button
          type="submit"
          className="btn btn-login mt-4"
          onClick={handleAdd}
          disabled={espera}
        >
          Agregar Producto
        </button>
      </div>
    </div>
  );
};
