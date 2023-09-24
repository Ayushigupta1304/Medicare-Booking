import React from 'react';
import { BrowserRouter as BrowserRouter } from 'react-router-dom'; 

import Header from '../components/Headers/Header';
import Footer from '../components/footer/Footer';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
    <BrowserRouter> 
      <>
        <Header />
        <main>
          <Routers />
        </main>
        <Footer />
      </>
    </BrowserRouter>
  ); 
};

export default Layout;
