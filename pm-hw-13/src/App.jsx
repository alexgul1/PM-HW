import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Menu from "./components/Menu/Menu";
import Weather from "./components/Weather/Weather";
import Retrospective from "./components/Retrospective/Retrospective";
import Todos from "./components/Todos/Todos";

import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Menu/>

      <div className={styles.container}>
        {/*TODO Add No Match and home pages*/}
        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/retro">
            <Retrospective />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
