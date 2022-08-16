import React from 'react'
import Video from './Menuimg/Pexels-Videos-3972.mp4'
import "./Menu.css"
import Header from '../Header';

const Menu1 = () => {
  return (
    <>
      <div className='fixed-top sticky-top' > <span><Header/></span></div>
      <div>

        <video src={Video}  autoPlay muted loop/>
        <div className="content d-flex justify-content-end  flex-column text-white  container">
         <div className="row">
          <div className="col-12" data-aos="fade-down"><h3>WE BRING YOU A LITTLE PIECE OF ITALY</h3></div><br />
          <div className="col-6 offset-3"data-aos="fade-left"><h1 className=' ' id="menutext" >Our Menu</h1></div>

         </div>
          
          
        </div>
      </div>





    </>


  )
}

export default Menu1