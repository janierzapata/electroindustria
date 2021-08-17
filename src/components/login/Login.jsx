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
          <label className="form-label">
            Correo Electronico
            <input
              type="email"
              className="form-control mt-3"
              ref={refUser}
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Conraseña
            <input
              type="password"
              className="form-control mt-3"
              ref={refPass}
            />
          </label>
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
