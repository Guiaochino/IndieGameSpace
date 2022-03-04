import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import GamesContent from './GamesContent';
import { gamesObjFour, gamesObjOne, gamesObjThree, gamesObjTwo, gamesObjFive } from './GamesData';

const Games = () => {
  return (
    <>  
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjOne}/></Link>
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjTwo}/></Link>
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjThree}/></Link>
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjFour}/></Link>
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjFive}/></Link>
        <Footer />
    </>
  );
};

export default Games;