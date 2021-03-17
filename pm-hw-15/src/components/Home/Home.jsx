import React from "react";
import {useHistory} from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/resume-builder');
  }

  return (
    <React.Fragment>
      <h2>This app is a simple resume builder in which in 3 steps you can create a resume</h2>
      <button className={styles.btn} type="button" onClick={onClick}>Create Resume</button>
    </React.Fragment>
  )
}

export default Home;
