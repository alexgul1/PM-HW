import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BeatLoader, ClipLoader} from "react-spinners";

import selector from "./PreviewsList.selector";
import {additionalLoadPhoto, loadPhotos, cleaned} from "../../ducks/previewsList";
import PhotoPreview from "../PhotoPreview/PhotoPreview";

import styles from "./PreviewsList.module.css";


const PreviewsList = ({albumId}) => {
  const [pagination, setPagination] = useState(2);

  const dispatch = useDispatch();
  const {isLoading, isAddLoading, isAllUploaded, data} = useSelector(selector)

  const loadMore = () => {
    dispatch(additionalLoadPhoto(pagination, albumId));
    setPagination(pagination + 1);
  }

  useEffect(() => {
    dispatch(loadPhotos(albumId))

    return () => dispatch(cleaned())
  }, [])

  return (
    <React.Fragment>
      {isLoading &&
      <div className={styles.loader}>
        <BeatLoader loading={isLoading}/>
      </div>
      }

      {!isLoading && data &&
      <div className={styles.container}>
        <div className={styles.list}>
          {data.map(({id, title, url}) => {
            return (
              <Link to={`/photo/${id}`} key={id}>
                <PhotoPreview title={title} url={url}/>
              </Link>)
          })}
        </div>
        <div className={styles.loader}>
          <ClipLoader loading={isAddLoading}/>
        </div>
        {!isAllUploaded &&
        <div className={styles.btnBlock}>
          <button className={styles.loadMore} onClick={loadMore} disabled={isAddLoading}>Load more photos</button>
        </div>}

      </div>
      }
    </React.Fragment>
  )
};

export default PreviewsList;
