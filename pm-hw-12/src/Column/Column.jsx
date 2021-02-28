import React from "react";

import styles from './Column.module.css';
import Card from "../Card/Card";

class Column extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['header']}>
          <div className={styles['title']}>Went well</div>
          <div className={styles['stats']}>5 comments &bull; 25 votes</div>
        </div>
        <div className={styles['list']}>
          <Card />
        </div>
      </div>
    )
  }
}

export default Column;
