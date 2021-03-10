import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import styles from './App.module.css';
import PhotoDetails from "./components/PhotoDetails/PhotoDetails";
import Main from "./components/Photos/Photos";
import Album from "./components/Album/Album";

function App() {
  return (
    <Router>
      <div className={styles.header}>
        <Link to="/" className={styles.headerLogo}><h1>Photo gallery</h1></Link>
      </div>
      <div className={styles.container}>
        <Switch>
          <Route path="/album/:id">
            <Album/>
          </Route>
          <Route path="/photo/:id">
            <PhotoDetails/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>


    </Router>

  );
}

export default App;
