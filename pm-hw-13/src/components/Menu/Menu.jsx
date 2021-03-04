import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <NavLink to="/weather" className={styles.link} activeClassName={styles.selected}>Weather</NavLink>
      <NavLink to="/retro" className={styles.link} activeClassName={styles.selected}>Retrospective</NavLink>
      <NavLink to="/todos" className={styles.link} activeClassName={styles.selected}>Todos</NavLink>
    </div>
  )
}

export default Menu;
