import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import {Layout} from "antd";
import styles from './App.module.css';
import PhotoDetails from "./components/PhotoDetails/PhotoDetails";
import Main from "./components/Photos/Photos";
import Album from "./components/Album/Album";

function App() {
  return (
    <Router>
      <Layout>
        <Layout.Header>
          <Link to="/"><h1 className={styles.header}>Photo Gallery</h1></Link>
        </Layout.Header>
        <Layout.Content className={styles.container}>
          <Switch>
            <Route path="/album/:id">
              <Album />
            </Route>
            <Route path="/photo/:id">
              <PhotoDetails />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Layout.Content>
      </Layout>
    </Router>

  );
}

export default App;
