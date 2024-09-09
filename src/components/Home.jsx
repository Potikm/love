import React, { useEffect } from 'react'
import Kitty from './hello-kitty-png-icon-16795.png'
import HeartAnim from './Animation - 1725915769730.gif'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    if (document.getElementById("nily")){
      let but = document.getElementById("nily");
      but.style.top = Math.floor((Math.random() * 40) + 30) + "%";
      but.style.left = Math.floor((Math.random() * 40) + 30) + "%";
      document.getElementById("nily").addEventListener("mouseover", function(){
        let but = document.getElementById("nily");
        but.style.top = Math.floor((Math.random() * 40) + 30) + "%";
        but.style.left = Math.floor((Math.random() * 40) + 30) + "%";
        console.log("hover")
      })
    }
  }, [document.getElementById("nily")])
  return (
    <div>
        <img src={HeartAnim} className='heartGif1' />
    <img src={HeartAnim} className='heartGif2' />
    <img src={HeartAnim} className='heartGif3' />
    <img src={HeartAnim} className='heartGif4' />
    <div className="heart">
      <img src={Kitty} alt="" className='kitty' />
       <Link to={"/LoveYou<3"}> <button  className='ily' id='ily' href="doc">Miluju tě</button></Link> 
    </div>

     <button className='nily' id='nily' >Nemiluju tě :(</button>
    </div>
  )
}

export default Home