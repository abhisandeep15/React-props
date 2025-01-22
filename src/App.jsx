import React from 'react';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import './App.css';
import img from './assets/2.png';

function App() {
  const productList = [
    { id: 1, title: 'Product A', rating: { rate: 4.5 }, price: 20.0, productImage:img },
    { id: 2, title: 'Product B', rating: { rate: 4.0 }, price: 30.0, productImage: img },
  ];

  return (
    <>
      <Navbar />
      <ProductCard productList={productList} />

    </>
  );
}

export default App;
