import React, { useEffect, useState } from 'react';
import Styles from './Image.module.css';
import Image from './assets/img1.jpg';
import LasyImage from './assets/img1-small.jpg';

const ImagesExport = () => {
  const [LazyLoadImage, SetLazyLoadImage] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      SetLazyLoadImage(true);
    };
  }, []);
  return (
    <div
      className={Styles.blur_load}
      style={{ backgroundImage: `url(${LasyImage})` }}
    >
      <img src={Image} alt="" />
    </div>
  );
};

export default ImagesExport;
