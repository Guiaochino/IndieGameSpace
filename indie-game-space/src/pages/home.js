import React from 'react'
import HomeContent from '../components/HomeContent';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './HomeData';

const Home = () => {
  return (
    <>
        <HomeContent {...homeObjOne}/>
        <HomeContent {...homeObjTwo}/>
        <HomeContent {...homeObjThree}/>
        <HomeContent {...homeObjFour}/>
    </>
  );
};

export default Home;