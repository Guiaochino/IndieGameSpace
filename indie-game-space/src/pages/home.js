import React from 'react'
import HomeContent from '../components/HomeContent';
import { homeObjOne } from './HomeData';

const Home = () => {
  return (
    <>
        <HomeContent {...homeObjOne}/>
    </>
  );
};

export default Home;