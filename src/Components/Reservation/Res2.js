import React from 'react'
import { IoPersonOutline } from "@react-icons/all-files/io5/IoPersonOutline";
import { GoMail } from "@react-icons/all-files/go/GoMail";
import { VscGlobe } from "@react-icons/all-files/vsc/VscGlobe";

const res2 = () => {
  return (
    <>
    
    <div className='container'>
      <div className="d-flex justify-content-center flex-column mt-5">

        <h3 className='text-center'>BOOK YOUR TABLE</h3>
        <h1 className='text-center'>RESERVATION</h1>
        <div className='text-center'><img   src={require("./Resimg/stars.jpg")} width={100} alt="" /></div>
        
      </div>




     

      <div className="row mt-5 mb-5">
        <div className="col d-flex ">
         
      <input type="text"  className="form-control " placeholder="Name*"   />
     <div className='d-flex align-self-center h2 border'><IoPersonOutline/></div> 
        </div>
        <div className="col d-flex  ">
         
         <input type="text"  className="form-control " placeholder="Email*"   />
        <div className='d-flex align-self-center h2 border '> <GoMail/></div> 
           </div>
           <div className="col d-flex  ">
         
         <input type="text"  className="form-control " placeholder="Email*"   />
        <div className='d-flex align-self-center h2 border '> <VscGlobe/></div> 
           </div>

      </div>

    



 <div>
 <div className="mb-3">
  <textarea className="form-control "  placeholder='Message' id="exampleFormControlTextarea1" rows="15"></textarea>
</div>
 </div>
<br />
 <div className='row '>
 <div className="col-12 ">
    <button type="submit" className=" container-fluid btn btn-warning ">  <span><h4 className='text-light pt-1'>SUBMIT MESSAGE</h4></span></button>
  </div>
  </div>




    </div>
    
    
    
    </>
  )
}

export default res2