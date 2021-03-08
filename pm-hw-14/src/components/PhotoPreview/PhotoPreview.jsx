import React from 'react';
import {Card} from 'antd';

import styles from './PhotoPreview.module.css'

const PhotoPreview = ({title, url}) => {
  return (
    <Card
      className={styles.img}
      hoverable
      cover={<img src={url} alt={'example'}/>}
    >
      <Card.Meta title={title}/>
    </Card>
  )
}

export default PhotoPreview;
