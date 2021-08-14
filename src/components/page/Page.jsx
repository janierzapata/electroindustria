import React from "react";
import "./page.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import { NotFound } from "./components/body/pages/NotFound";
import { Inventory } from "./components/body/pages/Inventory";
import { Search } from "./components/body/pages/Search";

export const Page = ( props ) => {
  return (
    <div className="page">
      <Router>
        <div>
          <Navbar ingresar={props.ingresar}/>
        </div>
        <div className="body">
          <Switch>
            <Route path="/" exact>
              <div className="body">
                <Inventory />
              </div>
            </Route>

            <Route path="/Inventory">
              <div className="body">
                <Inventory />
              </div>
            </Route>

            <Route path="/Search" exact>
              <div className="body">
                <Search />
              </div>
            </Route>

            <Route path="*">
              <div className="body">
                <NotFound />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
