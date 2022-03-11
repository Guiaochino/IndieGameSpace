
import React, { useState } from 'react';
import './DevProfile.css';
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';
import defaultImage from '../../images/defaultUser.png'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

// Template for the Viewing of Published Games by Developer
function GameView(props) {
  return (
    <>
      <div className='view'>

        <div className='title'> { props.gameTitle } </div>
        <div className='rating-container'> { props.rate } </div>
        <div className='button-container'>
          <button className='btn btn-dark'> <BsPencilSquare /> Edit </button>
          <button className='btn btn-danger gap-left'> <BsTrashFill /> Delete </button>
        </div>

      </div>
    </>
  );
};

function NoView () {
  return(
    <>
      <div className='no-games'> No Published Games to View, Click Add Game to Post a Game </div>
    </>
  )
}

GameView.defaultProps = {
  gameTitle : 'Sample Title',
  rate : '0.0'
};

// List View of Published Games
function GameListView(props) {

  // function onLoad () {

  //   axios

  // };

  return (
    <>
      <GameView gameTitle={props.games.title} />
    </>
  );
};

function MemberTemp (props) {
  return(
    <>
      <h6> {props.name} </h6>
    </>
  )
}

MemberTemp.defaultProps = {
  name : "Member Name"
};

function NoMember () {
  return(
    <>
      <div className='member-header' > <center> Setup your Account <br/> Click "Edit Profile" </center></div>
    </>
  )
}

function HasMember (props) {
  return(
    <>
      <h5 className='member-header'> Members </h5>
          <div className='member-container'>
            {/* For testing Purposes */}
            <MemberTemp />

            {/* Original Functionality Loop through members */}
            
          </div>
    </>
  )
}



export default function DevProfile(props) {

  const [dev, setdev] = useState();
  const [dataStatus, setDataStatus] = useState(false);

  const [games, setGames] = useState();
  const [hasGames, setHasGames] = useState();

  const [members, setMembers] = useState();
  const [hasMembers, setHasMembers] = useState(false);
  
  let data = new FormData();
  data.append("username", sessionStorage.getItem("user"));

  function handleLoad() {

    const urlAccount = "http://localhost/IndieGameSpace/indie-game-space/src/api/getDeveloper.php";

    const urlMembers = "http://localhost/IndieGameSpace/indie-game-space/src/api/getMembers.php";
    
    // For Account
    axios.post(urlAccount, data)
    .then(response => {
      console.log(response.data);
      if (response.data < 3){
        setDataStatus(false);
      } else {
        setdev(response.data);
        setDataStatus(true);
      }
    })
    .catch(err => console.log(err));
    
    // For Members
    axios.post(urlMembers, data)
    .then(response => {
      if (response.data < 3) {
        setHasMembers(false);
      } else {
        setMembers(response.data);
        setHasMembers(true);
      }
      
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className='profile-container' onLoad={handleLoad}>
        <div className='details-container'>
          <img src={ dataStatus && (isNaN(dev[0].profile_picture) || dev[0].profile_picture === "undefined") ? dev[0].profile_picture : props.user_image } alt='Profile' />
          <h4> { dataStatus ? dev[0].devUser : props.devname } </h4>
          <h6> { dataStatus ? dev[0].dev_email : props.devemail } </h6>

          { hasMembers ? (<HasMember members={members} />) : (<NoMember/>) }

          <div className='link-container'> 
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
          </div>

          <Button variant='outline-dark' className='block' href='/editProfile' > Edit Profile </Button>
        </div>

        <div className='game-container'>
          <div className='game-header' > 
            <div> Games Posted </div>
            <Button variant='outline-success' href='/publishGame'> Add Game </Button>
          </div>

          <div className='list-container' > 
            { hasGames ? (<GameListView games={games} />) : (<NoView />) }
          </div>
        </div>
      </div>
    </>
  )
}

DevProfile.defaultProps = {
  user_image : defaultImage,
  devname : "Developer Name",
  devemail : "someone@email.com"
};
