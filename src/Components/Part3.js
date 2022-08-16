import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import Header from './Header'
import "./THEGEMS.css"
const Part3 = () => {
  return (
      <>
      {/* <span><Header/></span> */}
    <div  >
     
<div > 
    <Carousel  >
  <Carousel.Item interval={1000} >
    <img
      className="d-block w-100"
      src={require("../imgGems/21-1.jpg")}
      alt="First slide"
      height={550}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require("../imgGems/22-1.jpg")}
      alt="Second slide"
      height={550}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require("../imgGems/23-1.jpg")}
      alt="Third slide"
      height={550}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require("../imgGems/24-1.jpg")}
      alt="Fourth slide"
      height={550}
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>




    </div>
    </>
  )
}

export default Part3