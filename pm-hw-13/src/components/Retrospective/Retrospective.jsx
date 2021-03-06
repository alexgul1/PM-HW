import React from 'react';

import Column from "./Column/Column";

import styles from './Retrospective.module.css'

const columnList = [
  {
    id: 1,
    name: "Good things",
    background: "#f8b195"
  },
  {
    id: 2,
    name: "Bad things",
    background: "#c06c84"
  },
  {
    id: 3,
    name: "Action items",
    background: "#355c7d"
  }
]

class Retrospective extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles['header']}>
          Team Retrospective
        </div>
        <div className={styles['board']}>
          {columnList.map(({id, name, background}) => {
            return <Column key={id} name={name} background={background}/>
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Retrospective;
