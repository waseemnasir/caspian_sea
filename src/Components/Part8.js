import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./THEGEMS.css"
const Part8 = () => {
  return (
      <>
  
  
    
  <Carousel  >
  <Carousel.Item interval={1000}>
  <div id='part8' className=" text-center container-fluid  d-flex flex-column align-items-center justify-content-center p-5 " >
<div       >
  <h1   className='    text-warning text1' >TESTIMONIAL </h1>
  <h2>  WHAT OUR GUESTS SAYS </h2>
  <h1 className='display-3 '  ><img src={require("../imgGems/Faces-400x400px-1_1_28-thegem-person-80.jpg")} alt=""  className='roundimg' /></h1>
  <p   className='  text-warning  ' >EMRSON ANDERSON</p> <br />
  <span>Creative Heads Inc.</span>
    <h6>Lorem ipsum nim ad minim veniam, quis nostrud exercitation ullamco</h6>
    <div><h1  id="commas">,,</h1></div> <br />
    <button type="button" class="btn btn-warning fw-bold text-light" data-aos="fade-left" >ADD YOUR REVIEW</button>

  </div>
</div>
  </Carousel.Item>
  
  <Carousel.Item interval={1000} >
  <div id='part8' className=" text-center container-fluid  d-flex flex-column align-items-center justify-content-center p-5 " >
<div       >
  <h1   className='    text-warning text1' >TESTIMONIAL </h1>
  <h2>  WHAT OUR GUESTS SAYS </h2>
  <h1 className='display-3 '  ><img src={require("../imgGems/Faces-400x400px-1_1_29-thegem-person-80.jpg")} alt=""  className='roundimg' /></h1>
  <p   className='  text-warning  ' >Jennifer Burns</p> <br />
  <span>Creative Heads Inc.</span>
    <h6>Lorem ipsum nim ad minim veniam, quis nostrud exercitation ullamco</h6>
    <div><h1  id="commas">,,</h1></div> <br />
    <button type="button" class="btn btn-warning fw-bold text-light " data-aos="fade-left">ADD YOUR REVIEW</button>

  </div>
</div>
  </Carousel.Item>
</Carousel>




    </>
  )
}

export default Part8