import React from 'react';
import {Typography} from 'antd';

import PhotoPreviews from "../PreviewsList/PreviewsList";

const Photos = () => {

  return (
    <React.Fragment>
      <Typography.Title level={2}>Photos</Typography.Title>
      <PhotoPreviews />
    </React.Fragment>
  )
}

export default Photos;
