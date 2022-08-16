import React from 'react'
import "./THEGEMS.css"
const Part4 = () => {
  return (
    <>

<div id='part4img' className=" text-left container-fluid  d-flex flex-column align-items-start justify-content-center " >
<div>
  <h1   className=' text-center  display-1 text-warning text1 '  >Discover</h1>
  <h1   className=' text-center fw-bold display-2 ' >FULL MENU PDF </h1>
  <div className="text-center justify-self-end"><button type="button" class="btn btn-warning btn-lg fw-bold text-light "  data-aos="fade-left">DISCOVER MENU</button></div>

<h1 className='display-3 text-center ' ><img src={require("../imgGems/stars.jpg")} alt="" /></h1>
<p className=' text-center ' >Discover all our perfect dishes, crafted with love! </p>

  
</div>
</div>

    
    </>
  )
}

export default Part4