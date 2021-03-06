import React, { useRef, useState } from "react";
import { login } from "../../services/api/userService";
import "./login.css";

export const Login = (props) => {

  const localuser = localStorage.getItem('user');
  
  if (localuser !== null) {
    props.ingresar(true);
  }

 

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
      localStorage.setItem('user', JSON.stringify(data))
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
            Usuario
            <input
              type="text"
              className="form-control mt-3"
              placeholder="user name"
              ref={refUser}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Contraseña
            <input
              type="password"
              placeholder="*************"
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
