import React from 'react'
import "./THEGEMS.css"
import Header from './Header'

const Part2 = () => {
  return (
      <>
      {/* <span><Header/></span> */}
    <div id='part2img' className='container-fluid  d-flex flex-column align-items-center justify-content-center' >

   <div >  <h5   className='    text-warning text1 'id='text2' >Renterpreted</h5> </div>
<h2 className='' >True italian cuisine</h2> 
<h1 className='display-3' ><img src={require("../imgGems/stars.jpg")} alt="" /></h1>
<h6 className='text-center px-5 mx-5 flex-wrap '  id="ptext2" >Our daily challenge: highest quality ingredients according to traditional recipes freshly interpreted and served with a lot of passion for the guest! Enjoy fine Mediterranean cuisine and exquisite service. We are very pleased to welcome you as guests in our restaurant.</h6>
<h4 className='text-warning underline' >DISCOVER OUR STORY</h4>
        
    </div>
   
    <img id='roundimg' src={require("../imgGems/2.png")}  alt="hehe" />
    
    </>
  )
}

export default Part2