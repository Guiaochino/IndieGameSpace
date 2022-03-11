import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer';
import DevsContent from './DevsContent';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DevList(props) {
  return(
    <>
      {props.devs.map((developer, index) => (
        <Link 
        to={{
          pathname : '/devprofile/' + developer.devUser,
          state : {
            ...developer
          }
        }} style={{textDecoration : 'none'}} >
          <DevsContent key={index} devname={developer.devUser} type={developer.dev_type} email={developer.dev_email} profile_picture={developer.profile_picture} order={index} />
        </Link>
        
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

const Developers = () => {

  const [devs, setDevs] = useState();
  const [hasDevs, setHasDevs] = useState(false);
    
  const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/developerList.php";

  useEffect(() => {
    axios.post(url)
    .then(response => {
      setDevs(response.data);
      setHasDevs(true);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <>  
      { hasDevs ? (<DevList devs={devs} />) : (<NoView/>)}
      <Footer />
    </>
  )
}

export default Developers;