import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import "../../App.css"
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
    <div className='container-fluid  d-flex flex-column align-items-center justify-content-center p-5' >
    <div >  <h5   className='    text-warning text1 'id='text2' >Discover</h5> </div>
<h1 className='fw-bold' >POPULAR MENU</h1> 
<h1 className='display-3' ><img src={require("../../imgGems/stars.jpg")} alt="" /></h1>

</div>  
    
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;