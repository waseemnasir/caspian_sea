import React from 'react'
import "./about.css";

import { GiKnifeFork } from "@react-icons/all-files/gi/GiKnifeFork";
import { FaCoffee } from "@react-icons/all-files/fa/FaCoffee";
import { IoPersonOutline } from "@react-icons/all-files/io5/IoPersonOutline";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";


const Apart3 = () => {
  return (
    <div className='Apart3  d-flex flex-row justify-content-center align-items-center '>
      
      
        <div  className='Apart3div container d-flex  justify-content-around  '>
        <div className='subdiv1 text-light '  >
          <h1 className="icondiv display-5 px-5 fw-bold " ><GiKnifeFork/></h1>
        
          <h1 className='mx-1 px-4 lh-lg'>120 </h1>
          <h3>Chef's Dishes</h3>
        
        </div>

        <div className='subdiv2 text-light'  >
          
        <h1 className="icondiv display-5 px-5 fw-bold "><FaCoffee/></h1>
        <h1 className='mx-3 px-4 lh-lg' >680</h1>

          <h3>Сoffee Сups</h3>
        
        </div>
        <div className='subdiv3 text-light'  >
          
        <h1 className="icondiv display-5 px-5 fw-bold "><IoPersonOutline/></h1>
        <h1 className='mx-1 px-4 lh-lg' >1248</h1>

          <h3>Happy Guests</h3>
        
        </div>
        

        
        <div className='subdiv4 text-light'  >
        <h1 className="icondiv display-5 px-5 fw-bold"><FaRegClock/></h1>
        <h1 className='mx-1 px-4 lh-lg' >56340</h1>

          <h3>Worked Hours</h3>
        
        </div>
        </div>
      
      
      </div>
  )
}

export default Apart3