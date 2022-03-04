import React from 'react'
import Footer from '../components/Footer/Footer';
import DevsContent from './DevsContent';
import { Link } from 'react-router-dom';
import { devsObjFour, devsObjOne, devsObjThree, devsObjTwo, devsObjFive } from './DevsData';


const Developers = () => {
  return (
    <>  
        <Link to="/DevProfile" style={{ textDecoration: 'none' }}> <DevsContent {...devsObjOne}/> </Link>
        <Link to="/DevProfile" style={{ textDecoration: 'none' }}> <DevsContent {...devsObjTwo}/> </Link>
        <Link to="/DevProfile" style={{ textDecoration: 'none' }}> <DevsContent {...devsObjThree}/> </Link>
        <Link to="/DevProfile" style={{ textDecoration: 'none' }}> <DevsContent {...devsObjFour}/> </Link>
        <Link to="/DevProfile" style={{ textDecoration: 'none' }}> <DevsContent {...devsObjFive}/> </Link>
        <Footer />
    </>
  )
}

export default Developers;