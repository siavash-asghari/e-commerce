import React from 'react';
import Banners from './components/Banners';
import Shop from './components/Shop';
import GiftCard from './components/GiftCard';
import Property from './components/Property';
import ShopInFirstPage from './components/ShopInFirstPage';


function App() {

  return (
    <>
      <Banners />
      <Property />
      {/* <Shop /> */}
      <ShopInFirstPage />
      <GiftCard />
    </>
  );
}

export default App;
