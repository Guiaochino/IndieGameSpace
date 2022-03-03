import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import GamesContent from './GamesContent';
import { gamesObjFour, gamesObjOne, gamesObjThree, gamesObjTwo } from './GamesData';

const Games = () => {
  return (
    <>  
        <Link to="GameProfile"><GamesContent {...gamesObjOne}/></Link>
        <Link to="GameProfile"><GamesContent {...gamesObjTwo}/></Link>
        <Link to="GameProfile"><GamesContent {...gamesObjThree}/></Link>
        <Link to="GameProfile"><GamesContent {...gamesObjFour}/></Link>
        <Footer />
    </>
  );
};

export default Games;