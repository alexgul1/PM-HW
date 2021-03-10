import React from 'react';

import PhotoPreviews from "../PreviewsList/PreviewsList";

import styles from "./Photos.module.css"

const Photos = () => {

  return (
    <React.Fragment>
      <div className={styles.header}>
        <h2 className={styles.title}>Photo Gallery</h2>
      </div>
      <PhotoPreviews />
    </React.Fragment>
  )
}

export default Photos;
