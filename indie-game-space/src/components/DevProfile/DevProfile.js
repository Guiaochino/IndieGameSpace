
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DevProfile.css';
import { GiConsoleController } from 'react-icons/gi';
import { MdPublish } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

export default class DevProfile extends Component {

  render() {
    return (
      <>
        <div className='account-container'>
          
          {/* Profile View */}
          <div className='profile-container'>
            <img src='filename.jpg' alt='SomePicture' />
            <h4> Developer's Name </h4>
            <div>
              Members Name / Personal Name
            </div>
            <h6> Developer's Email </h6>
            
            <button className='btn btn-dark block'> Edit Profile </button>
          </div>

          {/* Games and Post Game View */}
          <div className='viewing-contianer'>

            <div className='navigation'>
              <Link className='nav-element'> <GiConsoleController /> Games </Link>
              <Link className='nav-element'> <MdPublish /> Post </Link>
              <Link className='nav-element'> <CgProfile /> Profile </Link>
            </div>

            <div> { this.defaultView } </div>
            {/* TODO: List of Published Games by Specific Developer */}

            {/* TODO: Form for Publishing Game */}

            {/* Display Profile for Edit */}
          
          </div>

        </div>
      </>
    )
  }
}
