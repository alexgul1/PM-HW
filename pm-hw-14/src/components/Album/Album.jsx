import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import selector from "./UserInfo.selector";
import PhotoPreviews from "../PreviewsList/PreviewsList";
import {loadUserInfo} from "../../ducks/user";
import styles from './Album.module.css';


const Album = () => {
  const dispatch = useDispatch();
  const {id} = useParams()

  const {isLoading, data} = useSelector(selector);

  useEffect(() => {
    dispatch(loadUserInfo(id))
  }, [])

  return (
    <React.Fragment>
      {data &&
      <React.Fragment>
        <div className={styles.userInfo}>
          <h1 className={styles.name}>{data.name}
            <span className={styles.username}>{data.username}</span>
          </h1>
        </div>
        <PhotoPreviews/>
      </React.Fragment>
      }
    </React.Fragment>
  )

  /*return (
    <React.Fragment>
      <Typography.Title level={2}>Album section</Typography.Title>
      {isLoading && <Skeleton active={true}/>}
      {!isLoading && data &&
      <Typography.Title level={3}>{data.name} - {data.username}</Typography.Title>}

      <PreviewsList albumId={id}/>
    </React.Fragment>
  )*/
};

export default Album;
