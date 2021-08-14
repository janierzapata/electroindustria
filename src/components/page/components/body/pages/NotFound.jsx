import React from 'react'
import { NavLink } from "react-router-dom";


export const NotFound = () => {
    return (
        <div class="alert  alert-danger container-2 ">
      <h1 class="alert-heading header404">
        <b>404</b>
      </h1>
      <p class="mb-0 notfound">Pagina no encontrada</p>
        <NavLink to="/index" class="alert-link  ">
      <button type="button" class="btn btn-danger btn-notfound">
          volver al inicio
      </button>
        </NavLink>
    </div>
    )
}
