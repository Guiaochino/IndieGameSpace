import React from 'react'
import HomeContent from './HomeContent';
import Footer from '../Footer/Footer';
import FeaturedGames from './FeaturedGames';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './HomeData';
import FeaturedDevs from './FeaturedDevs';

const Home = () => {
  return (
    <>  
        <HomeContent {...homeObjOne}/>
        <FeaturedDevs />
        <FeaturedGames />
        <HomeContent {...homeObjTwo}/>
        <HomeContent {...homeObjThree}/>
        <HomeContent {...homeObjFour}/>
        <Footer />
    </>
    
  );
};

export default Home;