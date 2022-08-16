import React from 'react'
import "./Res.css"
import Carousel from 'react-bootstrap/Carousel'

const res7 = () => {
  return (
    < div className="Res7">
    
    <Carousel   >
  <Carousel.Item interval={1000}>
  <div id='' className=" text-center container-fluid  d-flex flex-column align-items-center justify-content-center p-5 " >
<div       >
  <h1   className='   text-white  text1' >TESTIMONIAL </h1>
  <h2 className='text-white'>  WHAT OUR GUESTS SAYS </h2>
  <h1 className='display-3 '  ><img src={require("./Resimg/Faces-400x400px-1_1_28-thegem-person-80.jpg")} alt=""  className='roundimg' /></h1>
  <p   className='  text-white  ' >EMRSON ANDERSON</p> <br />
  <span>Creative Heads Inc.</span>
    <h6 className='  text-white  '>Lorem ipsum nim ad minim veniam, quis nostrud exercitation ullamco</h6>
    <div><h1  id="commas">,,</h1></div> <br />
    <button type="button" class="btn  fw-bold text-light" data-aos="fade-left" >ADD YOUR REVIEW</button>

  </div>
</div>
  </Carousel.Item>
  
  <Carousel.Item interval={1000} >
  <div id='' className=" text-center container-fluid  d-flex flex-column align-items-center justify-content-center p-5 " >
<div       >
  <h1   className='  text-white   text1' >TESTIMONIAL </h1>
  <h2 className='  text-white  '>  WHAT OUR GUESTS SAYS </h2>
  <h1 className='display-3 '  ><img src={require("./Resimg/Faces-400x400px-1_1_29-thegem-person-80.jpg")} alt=""  className='roundimg' /></h1>
  <p   className='  text-white  ' >Jennifer Burns</p> <br />
  <span>Creative Heads Inc.</span>
    <h6 className='  text-white  '>Lorem ipsum nim ad minim veniam, quis nostrud exercitation ullamco</h6>
    <div><h1  id="commas">,,</h1></div> <br />
    <button type="button" class="btn  fw-bold text-light " data-aos="fade-left">ADD YOUR REVIEW</button>

  </div>
</div>
  </Carousel.Item>
</Carousel>

    
    
    
    
    
    
    
    </div>
  )
}

export default res7