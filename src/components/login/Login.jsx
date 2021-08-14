import React, { useRef } from "react";
import { login } from "../../services/api/userService";
import "./login.css";

export const Login = (props) => {
  const refUser = useRef(null);
  const refPass = useRef(null);

  const handleLogin = () => {
    const data = {
      usuario: refUser.current.value,
      clave: refPass.current.value,
    };

    console.log(data);

    login(data).then((response) => {
      console.log(response);
      if (response.conectado) {
        props.ingresar(true);
      }
    });
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

        <button type="submit" className="btn btn-login" onClick={handleLogin}>
          Ingresar
        </button>
      </div>
    </div>
  );
};
