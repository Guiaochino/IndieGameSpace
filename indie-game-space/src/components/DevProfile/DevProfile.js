
import React, { useEffect, useState } from 'react';
import './DevProfile.css';
import { GiConsoleController } from 'react-icons/gi';
import { MdPublish } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsPencilSquare, BsTrashFill } from 'react-icons/bs';
import defaultImage from '../../images/defaultUser.png'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

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
      <GameView gameTitle="Game Name" rate="" />
    </>
  );
};

// Forms to Publish a Game
function PublishForm() {

  const [gameName, setGameName] = useState();
  const [desc, setDesc] = useState();
  const [genre, setGenre] = useState();
  const [link, setLink] = useState();
  const [gameImg, setGameImg] = useState();
  const [sampImg, setSampImg] = useState();


  const handleGameName = async (e) => {
    await setGameName( { gameName : e.target.value } )
  }

  const handleDescription = async (e) => {
    await setDesc( { description : e.target.value } )
  }

  const handleGenre = async (e) => {
    await setGenre( { genre : e.target.value } )
  }

  const handleLink = async (e) => {
    await setLink( { link : e.target.value } )
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setGameImg({ game_image: base64 });
  };

  const handleMultiple = async (e) => {

    const arrfile = [];

    Array.from(e.target.files).forEach(file => {
      const conv = convertBase64(file);
      arrfile.push(conv); 
    });

    setSampImg(arrfile);

  };

  function handleSubmit (e) {
    
    let data = new FormData();
    data.append("game_name", gameName);
    data.append("description", desc);
    data.append("genre", genre);
    data.append("game_image", gameImg);
    data.append("samp_img", sampImg);
    data.append("link", link);

    // const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/publishGame.php";

    // axios.post(url, data)
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(err => console.log(err))

  }

  return (
    <>
      <Form>
        
        <Form.Group className='mb-3'>
          <Form.Label> Game Name </Form.Label>
          <Form.Control type='text' placeholder='Game Title' onChange={handleGameName}/>
        </Form.Group>

        
        <Form.Group className='mb-3'>
          <Form.Label> Game Description </Form.Label>
          <Form.Control as='textarea' placeholder='Short Description of Game, that can either be Informational or Eye Catching' style={ { height : '20vh' } } onChange={handleDescription}/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label> Genre </Form.Label>
          <Form.Control type='text' placeholder='Game Title' onChange={handleGenre}/>
        </Form.Group>

        
        <Form.Group className='mb-3'>
          <Form.Label> Game Image </Form.Label>
          <Form.Control type='file' onChange={ uploadImage } />
        </Form.Group>

        
        <Form.Group className='mb-3'>
          <Form.Label> Sample Images </Form.Label>
          <Form.Control type='file' multiple onChange={ handleMultiple } />
          <Form.Text> You can select a maximum of 6 images </Form.Text>
        </Form.Group>

        
        <Form.Group className='mb-3'>
          <Form.Label> Trailer Link </Form.Label>
          <Form.Control type='text' placeholder='Link here...'onChange={handleLink} />
          <Form.Text> Strictly Youtube Video Link Only </Form.Text>
        </Form.Group>

        <Button variant='success' type="submit" onClick={ handleSubmit }> Publish </Button>

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
  const [userProfile, setUserProfile] = useState();

  const { handle } = useParams();
  const location = useLocation();
  const { user } = location.state;

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

  const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/getDeveloper.php";

  useEffect(() => {

    let isMounted = true;

    // Put data into FormData
    let data = new FormData();
    data.append("username", user);


    axios.post(url, data)
    .then(response => {
      console.log(response.data);
      setUserProfile(response.data);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className='account-container'>

        {/* Profile View */}
        <div className='profile-container'>
          <img src={ userProfile[0].profile_picture ? userProfile[0].profile_picture : props.user_image } alt='Profile' className='gap-bottom'/>
          <h4 > { userProfile[0].devUser ? userProfile[0].devUser : props.devname } </h4>
          <h6 className='gap-bottom'> { userProfile[0].dev_email ? userProfile[0].dev_email : props.devemail } </h6>

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
