import React from 'react';

import PhotoPreview from "../PhotoPreview/PhotoPreview";
import {Button, Col, Empty, Row, Skeleton, Typography} from "antd";
import styles from "./Album.module.css";

const Album = () => {
  return (
    <React.Fragment>
      <Typography.Title level={2}>Album section</Typography.Title>
      <Skeleton active={true}/>
      <Empty description={'Album with id 1 not found'}/>
      <Typography.Title level={3}>Leanne Graham - Bret</Typography.Title>

      <div className={styles.container}>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col span={8}>
            <PhotoPreview />
          </Col >
          <Col span={8}>
            <PhotoPreview />
          </Col>
          <Col span={8}>
            <PhotoPreview />
          </Col>
          <Col span={8}>
            <PhotoPreview />
          </Col>
          <Col span={8}>
            <PhotoPreview />
          </Col >
          <Col span={8}>
            <PhotoPreview />
          </Col>
          <Col span={8}>
            <PhotoPreview />
          </Col>
          <Col span={8}>
            <PhotoPreview />
          </Col>
        </Row>
      </div>
      <Button className={styles.button} type={'default'} loading={false}>Load more</Button>

    </React.Fragment>
  )
};

export default Album;
