import React from 'react'
import "./Sliders.css"
const Sliders = () => {
  return (
    <div>
          <div id="container" >
      
      {/* NavBar */}



   <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-transparent" id="NAVBAR">
  <div class="container-fluid">
    <img id="navimg" src={require("../images/sliders-gold-texture-5e6e9971.png")} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">MENU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">BOOKING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">KARAOKE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">TAKEAWAY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">CATERING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">CURIOUS?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">#EXPERIENCES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">JOBS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active font-weight-bold text-light" aria-current="page " href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



          {/* Center Image */}
    
    
    
      <div class="center">
        <img src={require("../images/sliders-logo-white-64388d05.png")} alt="" />
      </div>



   </div>
    
    {/* Center Image
    
    
    
      <div class="center">
        <img src={require("./images/sliders-logo-white-64388d05.png")} alt="" />
      </div> */}

      


    </div>

    </div>
  )
}

export default Sliders
