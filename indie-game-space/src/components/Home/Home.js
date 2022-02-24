import React from 'react'
import HomeContent from './HomeContent';
import Footer from '../Footer/Footer';
import FeaturedGames from './FeaturedGames';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './HomeData';
import FeaturedDevs from './FeaturedDevs';
import TopFiller from '../TopFiller/TopFiller';

const Home = () => {
  return (
    <>  
        <TopFiller />
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