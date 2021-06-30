import React from 'react';
import I from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onOpenModal }) => {
  return images.map(({ id, webformatURL, user, largeImageURL }) => (
    <li onClick={onOpenModal} key={id} className={I.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={user}
        data-source={largeImageURL}
        className={I.ImageGalleryItemImage}
      />
    </li>
  ));
};

export default ImageGalleryItem;
