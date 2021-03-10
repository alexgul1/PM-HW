import React, {useEffect} from 'react';
import {Skeleton, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import selector from "./UserInfo.selector";
import PhotoPreviews from "../PhotoPreviews/PhotoPreviews";
import {loadUserInfo} from "../../ducks/user";


const Album = () => {
  const dispatch = useDispatch();
  const {id} = useParams()

  const {isLoading, data} = useSelector(selector);

  useEffect(() => {
    dispatch(loadUserInfo(id))
  }, [])

  return (
    <React.Fragment>
      <Typography.Title level={2}>Album section</Typography.Title>
      {isLoading && <Skeleton active={true}/>}
      {!isLoading && data &&
      <Typography.Title level={3}>{data.name} - {data.username}</Typography.Title>}

      <PhotoPreviews albumId={id}/>
    </React.Fragment>
  )
};

export default Album;
