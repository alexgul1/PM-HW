import React from 'react';

import styles from './PhotoPreview.module.css'

const PhotoPreview = ({title, url}) => {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={url} alt=""/>
      <p className={styles.info}>
        <span className={styles.title}>{title}</span>
      </p>
    </div>
  )
}

export default PhotoPreview;
