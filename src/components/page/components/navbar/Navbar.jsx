import React from "react";
import { NavLink } from "react-router-dom";




export const Navbar = (props) => {

  function salir () {
    props.ingresar(false)
  }

  return (
    
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/Inventory">
                  <a className="nav-link" href="#/">
                    Inventario
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/AddProduct">
                  <a className="nav-link" href="#/">
                    Nuevo Producto
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
              <NavLink to="/">

                  <p className="nav-link" onClick={salir}>
                    Salir
                  </p>
              </NavLink>
                
              </li>

              
            </ul>

            
          </div>
        </div>
      </nav>
    </div>
  );
};
