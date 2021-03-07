import React from 'react';
import {Card} from 'antd';

import styles from './PhotoPreview.module.css'

const PhotoPreview = () => {
  return (
    <Card
      className={styles.img}
      hoverable
      cover={<img src="https://via.placeholder.com/150/92c952"  alt={'example'}/>}
    >
      <Card.Meta title={'reprehenderit est deserunt velit ipsam'}/>
    </Card>
  )
}

export default PhotoPreview;
