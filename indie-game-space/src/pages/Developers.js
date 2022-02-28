import React from 'react'
import Footer from '../components/Footer/Footer';
import TopFiller from '../components/TopFiller/TopFiller';
import DevsContent from './DevsContent';
import { devsObjFour, devsObjOne, devsObjThree, devsObjTwo } from './DevsData';


const Developers = () => {
  return (
    <>  
        <TopFiller />
        <DevsContent {...devsObjOne}/>
        <DevsContent {...devsObjTwo}/>
        <DevsContent {...devsObjThree}/>
        <DevsContent {...devsObjFour}/>
        <Footer />
    </>
  )
}

export default Developers;