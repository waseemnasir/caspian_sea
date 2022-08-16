import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./THEGEMS.css"
const Part5 = () => {
  return (

    <>
    <div>
    
    <Carousel>
  <Carousel.Item interval={2000}>
  <div id='part5img1' className=' text-left container-fluid  d-flex flex-column align-items-center justify-content-center '  data-aos="flip-up">

<h3 className=' text-left    display-2 text-warning text1 ' >Fresh Offer</h3> 
<h2 className=' text-left ' >-15% ON SALADS</h2> 
<h1 className=' text-left display-3' ><img src={require("../imgGems/stars.jpg")} alt="" /></h1>
<h6 className=' text-left text-center px-5 mx-5 flex-wrap ' style={{ width:900}} >The Best time to eat healthy and at the same time delishes dishes in our authenthic Restorante </h6>
<h4 className=' text-left text-warning underline' >DISCOVER MORE</h4>
        
    </div>
  </Carousel.Item>
  
  <Carousel.Item interval={2000} >
  <div id='part5img2' className=" text-center container-fluid  d-flex flex-column align-items-center justify-content-center " data-aos="flip-up" >
<div       >
  <h1   className='  display-2  text-warning text1' >Ocean Food</h1>
  <h2  className='  fw-bold  ' >FROM 7PM50% SALE</h2>
  <h3   className='  h4'   style={{width:550}} >We offer to our guest fresh products, and we have new fish everyday</h3>
  <h4   className='  mt-5 text-warning underline' >DISCOVER MORE</h4>

  </div>
</div>
  </Carousel.Item>
</Carousel>


    </div>
    </>
  )
}

export default Part5