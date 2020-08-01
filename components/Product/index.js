import React from 'react';
import Price from '../Price';

const Product = () => {
  return (
    <div className='xl:w-1/4 md:w-1/2 sm:w-full my-3 px-3 overflow-hidden container text-center p-2'>
      <img className='mx-auto' src='/product_1.png' alt='Arroz Prato Fino' />
      <h1>Arroz Prato Fino</h1>
      <h2>Tradicional Tipo 1 500g</h2>
      <div>
        <Price />
      </div>
    </div>
  )
}

export default Product;