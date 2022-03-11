import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import GamesContent from './GamesContent';
import { gamesObjFour, gamesObjOne, gamesObjThree, gamesObjTwo, gamesObjFive } from './GamesData';

function GameList(props){
  return(
    <>
      {props.games.map((game, index) => (
        <GamesContent key={index} title={game.game_name} desc={game.game_desc} genre={game.game_genre} image={game.game_image} developer={game.devUser} order={index} />
      ))} 
    </>
    
  )
}

function NoView() {
  return(
    <>
      <div>
        No Available Developers
      </div>
    </>
  )
}

const Games = () => {

  const [gameList, setGameList] = useState()
  const [hasGameList, setHasGameList] = useState(false);

  const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/gameList.php";

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setGameList(response.data);
      setHasGameList(true)
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <>  
        {hasGameList ? (<GameList games={gameList} />) : (<NoView />)}
        <Footer />
    </>
  );
};

export default Games;