import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {BeatLoader} from "react-spinners";

import selector from "./UserInfo.selector";
import {cleaned, loadUserInfo} from "../../ducks/user";
import PhotoPreviews from "../PreviewsList/PreviewsList";

import styles from './Album.module.css';


const Album = () => {
  const dispatch = useDispatch();
  const {id} = useParams()

  const {isLoading, data} = useSelector(selector);

  useEffect(() => {
    dispatch(loadUserInfo(id))

    return () => dispatch(cleaned());
  }, [])

  return (
    <React.Fragment>
      {isLoading &&
      <div className={styles.loader}>
        <BeatLoader loading={isLoading}/>
      </div>
      }

      {!isLoading && Object.keys(data).length === 0 &&
      <h2 className={styles.notFound}>Album with id {id} not found</h2>
      }

      {!isLoading && Object.keys(data).length > 0 &&
      <React.Fragment>
        <div className={styles.userInfo}>
          <h2 className={styles.name}>{data.name}
            <span className={styles.username}>{data.username}</span>
          </h2>
        </div>
        <PhotoPreviews albumId={id}/>
      </React.Fragment>
      }
    </React.Fragment>
  )
};

export default Album;
