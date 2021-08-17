import React from 'react'
import { NavLink } from "react-router-dom";


export const NotFound = () => {
    return (
        <div className="alert  alert-danger container-2 ">
      <h1 className="alert-heading header404">
        <b>404</b>
      </h1>
      <p class="mb-0 notfound">Pagina no encontrada</p>
        <NavLink to="/" className="alert-link  ">
      <button type="button" className="btn btn-danger btn-notfound">
          volver al inicio
      </button>
        </NavLink>
    </div>
    )
}
