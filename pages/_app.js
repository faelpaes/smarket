import React from 'react';
import '../css/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <div className='container mx-auto'>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  )
}

export default MyApp;