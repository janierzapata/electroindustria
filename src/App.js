import { useState } from "react";
import { Login } from "./components/login/Login";
import { Page } from "./components/page/Page";

// const usuarios = {
//   janier:{
//     correo:'janiier2000stiiven@gmail.com',
//     contrasena:'1192890048',
//   },
//   javier:{
//     correo:'javier@mail.com',
//     contrasena:'1234',
//   },
 
// }

function App() {
  const [state, setState] = useState(false);


  const ingresar = (  ) =>{
    setState( !state )
  }

  return <div>{state ? <Page /> : 
  
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
            name="email"
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
            name="password"
          />
        </div>
        
        <button type="submit" className="btn btn-login" onClick={ingresar}>
          Ingresar
        </button>
      </form>
    </div>
    </div>
  }</div>;
}

export default App;
