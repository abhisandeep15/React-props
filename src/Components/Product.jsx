import React from 'react';

const Product = ({ title, rating = {}, price, productImage }) => {
  return (
    <div className="product">
      <img src={productImage || '/path/to/default-image.jpg'} alt={title || 'Product'} />
      <h1>{title || 'Untitled Product'}</h1>
      <p>{rating.rate || 0} ratings</p>
      <p>Price: ${price || 'N/A'}</p>
    </div>
  );
};

export default Product;
