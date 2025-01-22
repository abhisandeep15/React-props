import React from 'react';
import Product from './Product';

const ProductCard = ({ productList = [] }) => {
  return (
    <div className="product-card">
      {productList.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          rating={product.rating}
          price={product.price}
          productImage={product.productImage} 
        />
      ))}
    </div>
  );
};

export default ProductCard;
