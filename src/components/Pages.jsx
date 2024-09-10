import React from 'react'
import Home from './Home'
import {Navigate, Route, Routes} from "react-router-dom"
import LoveYou from './LoveYou'

function Pages() {
  return (
    
    <Routes >
     <Route path='/love' element={<Home />}/>
     <Route path='LoveYou<3' element={<LoveYou />}/>
     
    </Routes>
    
       
    
 
  
  )
}

export default Pages