import React from 'react'
import Header from './Header'
import "./THEGEMS.css"
const Part1 = () => {
  return (
    
    <>
   <div className='fixed-top sticky-top' > <span><Header/></span></div>
     <div className='IMG container-fluid  p-0 '>
<div    id='part1div'  className="container text-center text-light " >
  <h1 className=' display-1  text1  ' id='benv' data-aos="fade-right" >Benvenuti</h1>
  <h1 className='fw-bold display-2 ' data-aos="fade-left">ALLA THEGEM!</h1>
  <h1 className='h4' data-aos="fade-right">AT OUR RISTORANTE WE BRING YOU A LITTLE PIECE OF ITALY</h1>
  <h1 className='mt-5 display-2' data-aos="zoom-in-right">+49 30 26050</h1>
  <div className=" ms-auto justify-self-end"   ><button type="button" class="btn btn-outline-warning btn-lg">Reserve Table</button></div>

  
  
</div>

    </div> 
    
    
    
    
    
    
    
    </>
  )
}

export default Part1