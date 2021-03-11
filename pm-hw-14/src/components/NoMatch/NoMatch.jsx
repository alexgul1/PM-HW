import React from "react";
import {Link, useLocation} from 'react-router-dom'

import styles from "./NoMatch.module.css";

const NoMatch = () => {
  const {pathname} = useLocation();

  return <div className={styles.noMatch}>
    <h2>No match for {pathname}</h2>
    <Link to="/" className={styles.link}>Back to home page</Link>
  </div>;
}

export default NoMatch;
