import React from 'react';
import './DevProfile.css';
// import "materialize-css/dis/css/materialize.min.css";
// import "materialize-css/dis/css/materialize.min.js";
import Profile from './Profile';
import Section1 from './Section1';

const DevProfileTemp = () => {
  return (
    <div className='container'>
            <div className='row'>
                <div className='col s12 m3'>
                    <Profile />
                </div>
                <div className='col s12 m9'>
                    <Section1 />
                </div>
            </div>
        </div>
  )
}

export default DevProfileTemp;

