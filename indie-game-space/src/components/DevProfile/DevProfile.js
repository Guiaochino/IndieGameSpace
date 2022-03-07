
import React, { useEffect, useState } from 'react';
import './DevProfile.css';
import { GiConsoleController } from 'react-icons/gi';
import { MdPublish } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';
import defaultImage from '../../images/defaultUser.png'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { PublishForm } from '../Index';

// Template for the Viewing of Published Games by Developer
function GameView(props) {
  return (
    <>
      <div className='view'>

        <h4 className='title'> { props.gameTitle } </h4>
        <div className='rating-container'> { props.rate } </div>
        <div >
          <button className='btn btn-dark gep'> <BsPencilSquare /> Edit </button>
          <button className='btn btn-danger gap-left'> <BsTrashFill /> Delete </button>
        </div>

      </div>
    </>
  );
};

GameView.defaultProps = {
  gameTitle : 'Sample Title',
  rate : '0.0'
};

// List View of Published Games
function GameListView() {

  // function onLoad () {

  //   axios

  // };

  return (
    <>
      <GameView gameTitle="Game Name" rate="" />
    </>
  );
};



export default function DevProfile(props) {

  // const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/getDeveloper.php";

  return (
    <>
      
    </>
  )
}

DevProfile.defaultProps = {
  user_image : defaultImage,
  devname : "Developer Name",
  devemail : "someone@email.com"
};
