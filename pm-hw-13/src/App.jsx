import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Menu from "./components/Menu/Menu";
import WeeklyForecast from "./components/Weather/WeeklyForecast";
import Retrospective from "./components/Retrospective/Retrospective";
import Todos from "./components/Todos/Todos";

import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Menu/>

      <div className={styles.container}>
        <Switch>
          <Route exact path="/">
            <h2>Home Page</h2>
          </Route>
          <Route path="/weather">
            <WeeklyForecast />
          </Route>
          <Route path="/retro">
            <Retrospective />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="*">
            <h2>Page not found</h2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
