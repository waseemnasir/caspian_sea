import React from 'react'
import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import { IoCall } from "@react-icons/all-files/io5/IoCall";
import { GoClock } from "@react-icons/all-files/go/GoClock";
const THEGEMS = () => {
  return (
    
    <>
    
    
   


{/* NAVS */}


<div className=" container-fluid d-flex flex-wrap bg-dark text-white p-2">
  <div className="mx-3"> <span><IoLocationOutline/></span> 19th Ave New York, NY 95822, USA</div>
  <div className="mx-3"><a href="tel:+1 916-875-2235" className='text-light' > <span><IoCall/></span> +1 916-875-2235</a></div>
  <div className="mx-3"> <span><GoClock/></span> Working hours: Monday - Sunday, 10:00-22:00</div>
  <div className=" ms-auto justify-self-end"><button type="button" class="btn btn-outline-warning text-light">Reserve Table</button></div>

</div>



    </>
  )
}

export default THEGEMS