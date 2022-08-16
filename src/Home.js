import './App.css';
import React from 'react'
import Sliders from "./Components/Sliders"
import Header from './Components/Header'
import THEGEMS from "./Components/THEGEMS"
import Part1 from "./Components/Part1"
import Part2 from './Components/Part2'
import Part3 from './Components/Part3'
import Part4 from './Components/Part4'
import Part5 from './Components/Part5'
import Part6 from './Components/Part6'
import Part7 from './Components/Part7'
import Part8 from './Components/Part8'
import Part9 from './Components/Part9'
import Part10 from './Components/Part10'

// adding bascics 
// and resturant
import Resturant from "./Components/Basics/Resturant";



//====================== ABOUT US  ===========================
// import Aboutus from './Components/AboutUs/Aboutus';



const Home = () => {
  return (
    <> 
    {/* <Sliders/>  */}
      
{/* <THEGEMS/> */}
    {/* <Header/> */}


{/* ===================   HOMEPAGE   ==========================  */}
   <Part1/>
   <Part2/>
   <Part3/>
   <Resturant />
   <Part4/>
   <Part5/>
   <Part6/>
   <Part7/>
   <Part8/>
   <Part9/>
{/* ================================================= */}



   {/* =======   ABOUT US   ====== */}

   {/* <Aboutus/> */}


{/* ==========   FOOTER    ======== */}
   {/* <Part10/> */}
    </>

  )
}

export default Home
