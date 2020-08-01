import React from 'react';
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/'>
            <a><img className='mx-auto' src='/logo_smarket.png' alt='Smarket' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-blue-800 p-4 shadow-inner text-center font-bold text-white'>
        <Link href='/about'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contact'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header;
