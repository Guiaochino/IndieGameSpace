import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import GamesContent from './GamesContent';
import { gamesObjFour, gamesObjOne, gamesObjThree, gamesObjTwo, gamesObjFive } from './GamesData';

const Games = () => {

  // const [gameList, setGameList] = useState()

  // const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/gameList.php";

  // axios.get(url)
  //   .then((response) => {
  //     // setGameList(res);
  //     console.log(response.data);
  //   })
  //   .catch(err => console.log(err))


  return (
    <>  
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjOne}/></Link>
        <Link to="GameProfile2" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjTwo}/></Link>
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjThree}/></Link>
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjFour}/></Link>
        <Link to="GameProfile" style={{ textDecoration: 'none' }}><GamesContent {...gamesObjFive}/></Link>
        <Footer />
    </>
  );
};

export default Games;