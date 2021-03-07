import React from 'react';
import {Row, Col, Button, Skeleton, Typography, Empty} from 'antd';
import PhotoPreview from "../PhotoPreview/PhotoPreview";

import styles from './Main.module.css'

const Main = () => {
  return (
    <React.Fragment>
      <Typography.Title level={2}>Photos</Typography.Title>
      <Skeleton active={true}/>
      <Empty />
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
}

export default Main;
