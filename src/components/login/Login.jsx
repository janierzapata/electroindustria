import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import './login.css'




export const Login = () => {

  

  return (
    <div className="container">
    <div className="header-login">
        <h1>Bienvenido</h1>
      </div>
    <div className="  login ">
    
      <form>
        
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Conraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="btn btn-login">
          Ingresar
        </button>
      </form>
    </div>
    </div>
  );
};
