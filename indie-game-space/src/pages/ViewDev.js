import React from 'react';
import { useLocation } from 'react-router-dom';
import './ViewDev.css';
import defaultUser from '../images/defaultUser.png';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

function ViewDev() {

    const location = useLocation();
    const devDetails = location.state;

    return (
        <div>
            <div className='account-container'>
                <div className='container'>
                    <img className='image-container' src={devDetails.profile_picture !== "" ? devDetails.profile_picture : defaultUser} alt='profile' />
                    <div className='developer'> {devDetails.devUser} </div>
                    <div className='type'> ({devDetails.dev_type}) </div>
                    <div className='email'> Contact @ {devDetails.dev_email} </div>
                    <div className='dev-link'> 
                        <BsFacebook />{devDetails.media_link_fb && (<div className='fb'> {devDetails.media_link_fb} </div>)}
                        <BsTwitter />{devDetails.media_link_twt && (<div className='twt'> {devDetails.media_link_twt} </div>)}
                        <BsInstagram />{devDetails.media_link_ig && (<div className='ig'> {devDetails.media_link_ig} </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDev

