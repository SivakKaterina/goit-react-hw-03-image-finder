import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import I from './imageGallery.module.css';

const ImageGallery = ({ images, onOpenModal }) => (
  <ul className={I.ImageGallery} id="imagesList">
    <ImageGalleryItem onOpenModal={onOpenModal} images={images} />
  </ul>
);

export default ImageGallery;
