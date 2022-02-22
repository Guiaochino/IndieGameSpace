import React from 'react'
import HomeContent from './HomeContent';
import Footer from './Footer';
import Featured from './Featured';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './HomeData';

const Home = () => {
  return (
    <>
        <HomeContent {...homeObjOne}/>
        <HomeContent {...homeObjTwo}/>
        <Featured />
        <HomeContent {...homeObjThree}/>
        <HomeContent {...homeObjFour}/>
        <Footer />
    </>
    
  );
};

export default Home;