import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import UserForm from "./components/UserForm/UserForm";
import Resume from "./components/Resume/Resume";

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.header}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route exact path="/resume-builder">
            <UserForm/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
