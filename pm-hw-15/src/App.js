import React from "react";

import UserForm from "./components/UserForm/UserForm";

import styles from './App.module.css';
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className={styles.container}>
      <UserForm />
      {/*<Resume />*/}
    </div>
  );
}

export default App;
