import React from 'react';
import Link from 'next/link'
import Product from '../components/Product';

const Index = () => {
  return (
    <div className='flex flex-wrap -mx-3 overflow-hidden'>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default Index;
