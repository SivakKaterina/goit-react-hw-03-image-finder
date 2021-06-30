import React from 'react';
import B from './button.module.css';

const Button = ({ onLoadMore }) => (
  <button type="button" onClick={onLoadMore} className={B.Button}>
    Load more
  </button>
);
export default Button;
