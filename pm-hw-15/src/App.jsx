import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./components/Home/Home";
import UserForm from "./components/UserForm/UserForm";
import Resume from "./components/Resume/Resume";

import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.header}>
        <Link to="/" className={styles.headerLogo}><h1>Resume builder</h1></Link>
      </div>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/">
            <Home/>
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
