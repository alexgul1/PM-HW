import React from "react";
import {Empty, Typography} from "antd";

import styles from './PhotoDetails.module.css'
import {Link} from "react-router-dom";

const PhotoDetails = () => {
  return (
    <React.Fragment>
      <Typography.Title level={2}>Single Photo</Typography.Title>
      <Empty description={'Photo with id 1 not found'}/>
      <div className={styles.photoSection}>
        <img src={'https://via.placeholder.com/600/92c952'} alt={'asd'}/>
        <div>
          <Typography.Title level={3}>accusamus beatae ad facilis cum similique qui sunt</Typography.Title>
          <p className={styles.link}>
            Link to album - <Link  to={'/album/1'}>quidem molestiae enim</Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
};

export default PhotoDetails;
