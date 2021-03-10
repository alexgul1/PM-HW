import React, {useEffect, useState} from "react";
import styles from "./PreviewsList.module.css";
import {Link} from "react-router-dom";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import {useDispatch, useSelector} from "react-redux";
import selector from "./PreviewsList.selector";
import {additionalLoadPhoto, loadPhotos} from "../../ducks/photoPreviews";


const PreviewsList = ({albumId}) => {
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
      {data &&
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.list}>
            {data.map(({id, title, url}) => {
              return (
                <Link to={`/photo/${id}`} key={id} >
                  <PhotoPreview title={title} url={url}/>
                </Link>)
            })}
          </div>
          <div className={styles.btnBlock}>
            <button className={styles.loadMore} onClick={onClick} disabled={isAddLoading}>Load more photos</button>
          </div>

        </div>
      </React.Fragment>
      }
    </React.Fragment>
  )
}

export default PreviewsList;
