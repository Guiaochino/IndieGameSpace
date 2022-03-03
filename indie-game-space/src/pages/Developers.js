import React from 'react'
import Footer from '../components/Footer/Footer';
import DevsContent from './DevsContent';
import { Link } from 'react-router-dom';
import { devsObjFour, devsObjOne, devsObjThree, devsObjTwo } from './DevsData';


const Developers = () => {
  return (
    <>  
        <Link to="/DevProfile"><DevsContent {...devsObjOne}/></Link>
        <DevsContent {...devsObjTwo}/>
        <DevsContent {...devsObjThree}/>
        <DevsContent {...devsObjFour}/>
        <Footer />
    </>
  )
}

export default Developers;