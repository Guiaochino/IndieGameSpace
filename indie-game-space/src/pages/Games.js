import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import GamesContent from './GamesContent';
import { gamesObjOne } from "./GamesData";


const Games = () => {

  const [gameList, setGameList] = useState()

  const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/gameList.php";

  axios.get(url)
    .then((response) => {
      // setGameList(res);
      console.log(response.data);
    })
    .catch(err => console.log(err))


  return (
    <>  
        <GamesContent {...gamesObjOne} />
        <Footer />
    </>
  );
};

export default Games;