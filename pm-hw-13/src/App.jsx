import logo from './logo.svg';
import styles from './App.module.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Menu from "./Menu/Menu";
import Weather from "./Weather/Weather";
import Retrospective from "./Retrospective/Retrospective";
import Todos from "./Todos/Todos";

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
