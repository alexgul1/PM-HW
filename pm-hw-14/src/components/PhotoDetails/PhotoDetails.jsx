import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import selector from "./PhotoDetails.selector";
import {loadDetails} from "../../ducks/photoDetails";

import styles from './PhotoDetails.module.css'


const PhotoDetails = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {isLoading, data} = useSelector(selector)

  useEffect(() => {
    dispatch(loadDetails(id))
  }, [])

  return (
    <React.Fragment>
      {data &&
      <React.Fragment>
        <div className={styles.singleBlock}>
          <div className={styles.workDesc}>
            <div className={styles.detail}>
              <div className={styles.desc}>Photo ID</div>
              <div className={styles.value}>{data.id}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.desc}>Title</div>
              <div className={styles.value}>{data.title}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.desc}>Album ID</div>
              <div className={styles.value}>{data.albumId}</div>
            </div>
            <div className={styles.detail}>
              <div className={styles.desc}>Album</div>
              <div className={styles.value}>
                <Link to={`/album/${data.albumId}`}>{data.albumTitle}</Link>
              </div>
            </div>
          </div>
          <div className={styles.workImg}>
            <img src={data.url} alt={data.id}/>
          </div>
        </div>
      </React.Fragment>}
    </React.Fragment>
  )

  /*return (
    <React.Fragment>
      <Typography.Title level={2}>Single Photo</Typography.Title>
      {isLoading && <Skeleton active/>}
      {!isLoading && !data && <Empty description={`Photo with id ${id} not found`}/>}
      {!isLoading && data &&
        <div className={styles.photoSection}>
          <img src={data.url} alt={data.id}/>
          <div>
            <Typography.Title level={3}>{data.title}</Typography.Title>
            <p className={styles.link}>
              Link to album - <Link to={`/album/${data.albumId}`}>{data.albumTitle}</Link>
            </p>
          </div>
        </div>}

    </React.Fragment>
  )*/
};

export default PhotoDetails;
