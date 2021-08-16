import React, { useRef, useState } from "react";
import { login } from "../../services/api/userService";
import "./login.css";

export const Login = (props) => {
  const [error, setError] = useState(null);
  const [espera, setEspera] = useState(false);

  const refUser = useRef(null);
  const refPass = useRef(null);

  const handleLogin = () => {
    setEspera(true);
    const data = {
      usuario: refUser.current.value,
      clave: refPass.current.value,
    };

    login(data).then((response) => {
      props.ingresar(response.conectado);
      setError(response.error);
    });
    setEspera(false);
  };

  return (
    <div className="container">
      <div className="header-login">
        <h1>Bienvenido</h1>
      </div>
      <div className="  login ">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            className="form-control"
            ref={refUser}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="pss" className="form-label">
            Conraseña
          </label>
          <input
            type="password"
            className="form-control"
            ref={refPass}
            id="pss"
          />
        </div>
        {error && (
          <div className="alert alert-dismissible alert-danger">
            <strong>{error}</strong>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-login"
          onClick={handleLogin}
          disabled={espera}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};
