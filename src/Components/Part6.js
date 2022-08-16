import React from 'react'
import "./THEGEMS.css"

const Part6 = () => {
  return (
    <>
    
<div id='part6img'className=" text-center container-fluid  d-flex flex-column align-items-end justify-content-center " >

<div className=''  >
  <h1   className='   display-3 text-warning text1' >Ingredients</h1>
  <h3   className='  fw-bold display-3 ' >HAND PICKED WITH LOVE</h3>
<h1 className='display-3' ><img src={require("../imgGems/stars.jpg")} alt="" /></h1>
<div className=' text-center flex-wrap ' id='p6' >
  <p  className='  ' >Daily Our Chief visit the best in area Farmers Market, and choose there fresh and halfy vegets, herbs, meat and other ingridients to ou special dishes.
  </p> </div>

  <h4   className=' text-warning mt-5 underline' >DISCOVER MORE</h4>

  
</div>


</div>

    
    </>
  )
}

export default Part6