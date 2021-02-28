import React from "react";

import styles from "./Card.module.css";

class Card extends React.Component{
  render() {
    return (
      <div className={styles['card']}>
        <div className={styles['text']}>
          Agile teams are dependent on the quality of their retrospectives.as aksdl;askl; dsaldk
        </div>
        <div className={styles['info']}>
          asdasdasd
        </div>
      </div>
    )
  }
}

export default Card;
