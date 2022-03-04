
import React, { useState } from 'react';
import './DevProfile.css';
import { GiConsoleController } from 'react-icons/gi';
import { MdPublish } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';
import defaultImage from '../../images/defaultUser.png'
import { Form, Button } from 'react-bootstrap';

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

  return (
    <>
      <GameView />
      <GameView />
      <GameView />
      <GameView />
      <GameView />
    </>
  );
};

// Forms to Publish a Game
function PublishForm() {
  return (
    <>
      <Form>
        
        <Form.Group classname='mb-3'>
          <Form.Label> Game Name </Form.Label>
          <Form.Control type='text' placeholder='Game Title' />
        </Form.Group>

        
        <Form.Group classname='mb-3'>
          <Form.Label> Game Description </Form.Label>
          <Form.Control as='textarea' placeholder='Short Description of Game, that can either be Informational or Eye Catching' style={ { height : '20vh' } }/>
        </Form.Group>

        
        <Form.Group classname='mb-3'>
          <Form.Label> Game Image </Form.Label>
          <Form.Control type='file'/>
        </Form.Group>

        
        <Form.Group classname='mb-3'>
          <Form.Label> Sample Images </Form.Label>
          <Form.Control type='file' multiple />
          <Form.Text> You can select a maximum of 6 images </Form.Text>
        </Form.Group>

        
        <Form.Group classname='mb-3'>
          <Form.Label> Trailer Link </Form.Label>
          <Form.Control type='text' placeholder='Link here...' />
          <Form.Text> Strictly Youtube Video Link Only </Form.Text>
        </Form.Group>

        <Button variant='success' type='submit'> Publish </Button>

      </Form>
    </>
  );
};

//  Forms to Edit Profile
function Profile() {
  return (
    <>
      <div>

        <div>
          <h3> Developer Name </h3>
          <h6> Developer Email </h6>
        </div>

        <div>
          <h6> Dev type </h6>
          <h6> media-links \\ NOTE: Need Backend </h6>
        </div>

        <div> Members \\ NOTE: Need Backend </div>

      </div>
    </>
  );
};



export default function DevProfile(props) {

  const [showGame, setShowGame] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const changeView = (show) => {
    if (show === "GameListView" && showGame === false) {
      setShowGame(true);
      setShowForm(false);
      setShowProfile(false);
    } else if (show === "PublishForm" && showForm === false) {
      setShowGame(false);
      setShowForm(true);
      setShowProfile(false);
    } else if (show === "Profile" && showProfile === false) {
      setShowGame(false);
      setShowForm(false);
      setShowProfile(true);
    }
  }

  return (
    <>
      <div className='account-container'>

        {/* Profile View */}
        <div className='profile-container'>
          <img src={ props.user_image } alt='Profile' className='gap-bottom'/>
          <h4 > { props.devname } </h4>
          <h6 className='gap-bottom'> { props.devemail } </h6>

          {/* TODO: Link Button to Edit Profle Form */}
          <button className='btn btn-dark block' > Edit Profile </button>
        </div>

        {/* Games and Post Game View */}
        <div className='viewing-contianer block'>

          <ul className='navigation block'>
            <li className='nav-element' onClick={() => changeView("GameListView")}> <GiConsoleController /> Games </li>
            <li className='nav-element' onClick={() => changeView("PublishForm")}> <MdPublish /> Post Game </li>
            <li className='nav-element' onClick={() => changeView("Profile")}> <CgProfile /> Profile </li>
          </ul>

          <div className='view-control'> {showGame && (<GameListView />)} {showForm && (<PublishForm />)} {showProfile && (<Profile />)} </div>

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
