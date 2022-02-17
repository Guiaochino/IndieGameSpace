import React from 'react'
import HomeContent from './HomeContent';
import Footer from './Footer';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './HomeData';

const Home = () => {
  return (
    <>
        <HomeContent {...homeObjOne}/>
        <HomeContent {...homeObjTwo}/>
        <HomeContent {...homeObjThree}/>
        <HomeContent {...homeObjFour}/>
        <Footer />
    </>
    
  );
};

export default Home;