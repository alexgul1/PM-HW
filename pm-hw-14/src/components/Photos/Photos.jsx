import React, {useState, useEffect} from 'react';
import {Row, Col, Button, Skeleton, Typography, Empty} from 'antd';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import PhotoPreview from "../PhotoPreview/PhotoPreview";
import selector from "./Photos.selector";
import {additionalLoadPhoto, loadPhotos} from "../../ducks/photos";

import styles from './Photos.module.css'

const Photos = () => {
  const [offset, setOffset] = useState(2);
  const dispatch = useDispatch();
  const {isLoading, isAddLoading, data} = useSelector(selector)

  const onClick = () => {
    dispatch(additionalLoadPhoto(offset));
    setOffset(offset + 1);
  }

  useEffect(() => {
    dispatch(loadPhotos())
  }, [])

  return (
    <React.Fragment>
      <Typography.Title level={2}>Photos</Typography.Title>
      {isLoading && <Skeleton active={true}/>}
      {!isLoading && data &&
      <React.Fragment>
        <div className={styles.container}>
          <Row justify="space-around" gutter={[16, 16]}>
            {data.map(({id, title, url}) => {
              return (
                <Col key={id} span={8}>
                  <Link to={`/photo/${id}`}>
                    <PhotoPreview title={title} url={url}/>
                  </Link>
                </Col>)
            })}
          </Row>
        </div>
        <Button className={styles.button} type={'default'} loading={isAddLoading} onClick={onClick}>Load more</Button>
      </React.Fragment>
      }


    </React.Fragment>
  )
}

export default Photos;
