import React from 'react'
import Footer from '../Footer/Footer';
import FeaturedGames from './FeaturedGames';
import HeroSection from './HeroSection';
// import HomeContent from './HomeContent';
// import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './HomeData';
// import FeaturedDevs from './FeaturedDevs';

const Home = () => {
  return (
    <>  
        <HeroSection />
        <FeaturedGames />
        {/* <FeaturedDevs />
        <HomeContent {...homeObjOne}/>
        <HomeContent {...homeObjTwo}/>
        <HomeContent {...homeObjThree}/>
        <HomeContent {...homeObjFour}/> */}
        <Footer />
    </>
    
  );
};

export default Home;