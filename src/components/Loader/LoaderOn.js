import React from 'react';
import Loader from 'react-loader-spinner';

import s from './loader.module.css';

const LoaderOn = () => {
  return (
    <div className={s.Loader}>
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderOn;
