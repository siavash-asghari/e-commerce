import React from 'react';
import Banners from './components/Banners';
import Gallery from './components/PhotoGallery';
import GiftCard from './components/GiftCard';
import Property from './components/Property';
import ShopInFirstPage from './components/ShopInFirstPage';


function App() {

  return (
    <main>
      <Banners />
      <Property />
      <ShopInFirstPage name="محصولات" />
      <Gallery />
      <GiftCard />
    </main>
  );
}

export default App;
