import React from 'react'
import Footer from '../Footer/Footer';
import FeaturedGames from './FeaturedGames';
import HeroSection from './HeroSection';

const Home = (props) => {
  return (
    <>  
        <HeroSection />
        <FeaturedGames />
        <Footer />
    </>
    
  );
};

export default Home;