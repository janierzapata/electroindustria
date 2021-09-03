import { useState } from "react";
import { Login } from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Page } from "./components/page/Page";





function App() {
  const [state, setState] = useState(true);

  const ingresar = (estado) => {
    setState(estado)
  }

  return <div>{ state ?

    <>
      <Router>
        <Switch>
          <Route path="/">

            <Page ingresar={ingresar}/>

          </Route>
        </Switch>
      </Router>
    </>
    :
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Login ingresar={ingresar}/>
          </Route>
        </Switch>
      </Router>
    </>

  }</div>;
}

export default App;
