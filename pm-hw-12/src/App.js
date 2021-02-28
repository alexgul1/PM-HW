import React from "react";
import styles from './App.module.css';
import Column from "./Column/Column";

function App() {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        Team Retrospective
      </div>
      <div className={styles['board']}>
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
}

export default App;
