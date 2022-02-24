import React from 'react'
import Footer from '../components/Footer/Footer';
import TopFiller from '../components/TopFiller/TopFiller';
import GamesContent from './GamesContent';
import { gamesObjFour, gamesObjOne, gamesObjThree, gamesObjTwo } from './GamesData';

const Games = () => {
  return (
    <>  
        <TopFiller />
        <GamesContent {...gamesObjOne}/>
        <GamesContent {...gamesObjTwo}/>
        <GamesContent {...gamesObjThree}/>
        <GamesContent {...gamesObjFour}/>
        <Footer />
    </>
  );
};

export default Games;