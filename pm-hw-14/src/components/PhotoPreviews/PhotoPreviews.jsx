import {Button, Col, Row, Skeleton} from "antd";
import React, {useEffect, useState} from "react";
import styles from "./PhotoPreviews.module.css";
import {Link} from "react-router-dom";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import {useDispatch, useSelector} from "react-redux";
import selector from "./PhotoPreviews.selector";
import {additionalLoadPhoto, loadPhotos} from "../../ducks/photoPreviews";


const PhotoPreviews = ({albumId}) => {
  const [pagination, setPagination] = useState(2);

  const dispatch = useDispatch();
  const {isLoading, isAddLoading, data} = useSelector(selector)

  const onClick = () => {
    dispatch(additionalLoadPhoto(pagination, albumId));
    setPagination(pagination + 1);
  }

  useEffect(() => {
    dispatch(loadPhotos(albumId))
  }, [])

  return (
    <React.Fragment>
      {isLoading && <Skeleton active />}
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
      </React.Fragment>}
    </React.Fragment>

  )
}

export default PhotoPreviews;
