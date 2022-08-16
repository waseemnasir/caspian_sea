import React from 'react'
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";

import { Button } from 'bootstrap';
import "./THEGEMS.css"

import { NavLink } from 'react-router-dom'


// FaShoppingCart

const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light container-fluid p-3 fixed-top sticky-top " id='headstyle' >
  <div className="container-fluid ">
    {/* <a className="navbar-brand text-light" href="#">Navbar</a> */}
 <img src={require("../imgGems/logo_222a370ef57e1d5b2f7a34ddaa648448d7_2x.png")} alt="display logo" height={50} id="logoimg" />        

    <button   className="      navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span   className="navbar-toggler-icon  "  ></span>
    </button>
    <div   className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d ">
      
        <li className="nav-item  ">
          <NavLink to="/" className="nav-link text-warning fw-bold  " id='pheader' >HOMEPAGE</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Aboutus" className="nav-link text-light fw-bold " href="#">ABOUT</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Menu" className="nav-link text-light fw-bold " href="#">MENU</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Reservation" className="nav-link text-light fw-bold " href="#">RESERVATION</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Cart" className="nav-link text-light fw-bold h5 " href="#">Cart  <FaShoppingCart/> <span className=''></span></NavLink>
        </li>
        <li className="nav-item ">
          <a className="nav-link  text-light fw-bold " href="#"  >
            CONTACT
          </a>
          
        </li>
        <li className="nav-item">
        <button type="submit" className='bg-transparent text-light bd-0' id='btnicon' ><i className=' h3 bg-transparent bd-0 '>  <AiOutlineSearch/>  </i></button>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</>

   
  )
}

export default Header